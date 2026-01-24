export default function Footer() {
    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-400">
                © {new Date().getFullYear()} AI Portfolio Chatbot
            </div>
        </footer>
    );
};