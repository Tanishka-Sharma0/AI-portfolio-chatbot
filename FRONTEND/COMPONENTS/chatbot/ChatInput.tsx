"use client";
import { send } from "process";
import { useState } from "react";


interface props {
    onSend: (message: string) => void;
    disabled: boolean;

}

export default function ChatInput({ onSend, disabled }: props) {
    const [value, setValue] = useState("");

    const send = () => {
        if (!value.trim()) return;
        onSend(value);
        setValue("");
    }

    return (
        <div className="flex gap-2 border-t border-white/10 pt-4 ">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                disabled={disabled}
                placeholder="Ask something about the portfolio..."
                className="flex-1 bg-card rounded-lg px-4 py-2 text-sm outline-none "
            />
            <button onClick={send} disabled={disabled} className="bg-accent text-black px-4 rounded-lg text-sm disabled:opacity-50">Send</button>
        </div>
    )
}