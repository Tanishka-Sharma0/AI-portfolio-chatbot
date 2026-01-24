"use client";
import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";

type Msg = {
    role: "user" | "ai";
    content: string;
}

export default function ChatWindow() {
    const [message, setMessage] = useState<Msg[]>([]);
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message, typing]);


    const fakeAIResponse = async (text: string) => {
        setTyping(true);

        const words = text.split(" ");
        let current = "";


        for (let i = 0; i < words.length; i++) {
            await new Promise((r) => setTimeout(r, 60));
            current += words[i] + '';
            setMessage((prev) => [
                ...prev.slice(0, -1),
                { role: "ai", content: current }

            ]);
        }

        setTyping(false);
    }


    const sendMessage = async (msg: string) => {
        setMessage((prev) => [
            ...prev,
            { role: "user", content: msg },
            { role: "ai", content: "" },
        ]);

        await fakeAIResponse(
            "This is a mock AI response. Backend integration will come next."
        );
    };

    return (
        <div className="flex flex-col h-[75vh]">
            <div className="flex-1 overflow-y-auto space-y-4">
                {message.length === 0 && (
                    <SuggestedQuestions onSelect={sendMessage} />
                )}

                {message.map((m, i) => (
                    <MessageBubble key={i} role={m.role} content={m.content} />
                ))}

                {typing && <TypingIndicator />}
                <div ref={bottomRef} />
            </div>

            <ChatInput onSend={sendMessage} disabled={typing} />
        </div>
    )

}