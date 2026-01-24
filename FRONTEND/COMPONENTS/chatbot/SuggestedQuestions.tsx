"use client";

interface props {
    onSelect: (question: string) => void
}

const question = [
    "Tell me about your skills",
    "Which projects represent your best work?",
    "What experience do you have?",
    "What technologies do you specialize in?",
];


export default function SuggestedQuestions({ onSelect }: props) {
    return (
        <div className="flex flex-wrap gap-2">
            {question.map((q) => (
                <button
                    key={q}
                    onClick={() => onSelect(q)}
                    className="px-3 py-1 rounded-full text-xs bg-card hover:bg-accent hover:text-black transition"
                >
                    {q}
                </button>
            ))}
        </div>
    );
};