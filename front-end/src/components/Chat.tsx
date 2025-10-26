import { useState, useRef, useEffect, FormEvent } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
    content: string;
    isUser: boolean;
}

const Chat = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            content:
                "Hey there! We're college students who built Helios AI for a hackathon. I'm your voice-controlled assistant, powered by Google Gemini. Ask me about our solar-tracking robot or try a voice command to rotate the panel!",
            isUser: false,
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = message.trim();

        // Add user message
        setMessages((prev) => [...prev, { content: userMessage, isUser: true }]);
        setMessage("");
        setIsLoading(true);

        // Add typing indicator
        setMessages((prev) => [...prev, { content: "...typing", isUser: false }]);

        try {
            const res = await fetch("/snowflake/complete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();

            // Remove typing indicator
            setMessages((prev) => prev.filter((msg) => msg.content !== "...typing"));

            // Add bot response
            setMessages((prev) => [
                ...prev,
                { content: data.botResponse, isUser: false },
            ]);
        } catch (err) {
            console.error(err);
            setMessages((prev) => prev.filter((msg) => msg.content !== "...typing"));
            toast({
                title: "Connection Error",
                description: "Unable to connect to Helios Assistant. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as unknown as FormEvent);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1 gradient-hero relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.3),transparent_50%)] animate-pulse" />
                </div>

                <div className="container mx-auto px-4 py-12 relative z-10 max-w-4xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-medium">AI Assistant Active</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Helios AI Chatbot
                        </h1>
                        <p className="text-muted-foreground">Powered by Google Gemini</p>
                    </div>

                    {/* Chat Card */}
                    <Card className="flex flex-col h-[600px] border-2 border-border/50 shadow-[var(--shadow-panel)] overflow-hidden bg-background/95 backdrop-blur-xl">
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-primary/90 to-secondary/90 p-4 text-background">
                            <div className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5" />
                                <h3 className="font-semibold">Helios AI Assistant</h3>
                            </div>
                            <p className="text-sm opacity-90 mt-1">
                                Ask me about solar energy, the Helios robot, or try a voice
                                command to move the solar panel.
                            </p>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-accent/20">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"
                                        } animate-fade-in`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-lg ${msg.isUser
                                            ? "bg-primary text-primary-foreground ml-4"
                                            : "bg-card border border-border mr-4"
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                            {msg.content}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start animate-fade-in">
                                    <div className="bg-card border border-border p-4 rounded-lg mr-4">
                                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-border bg-card">
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <Input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Try 'Rotate panel left' or ask about our project..."
                                    disabled={isLoading}
                                    className="flex-1 bg-input border-border"
                                />
                                <Button
                                    type="submit"
                                    disabled={!message.trim() || isLoading}
                                    className="bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:bg-primary/90 transition-all"
                                >
                                    {isLoading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <Send className="h-5 w-5" />
                                    )}
                                </Button>
                            </form>
                            <p className="text-xs text-muted-foreground text-center mt-3">
                                Built by students, powered by Google Gemini
                            </p>
                        </div>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Chat;
