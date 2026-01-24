"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const navItems = [
    { name: "Chat", href: "/chat" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Admin", href: "/admin" },
];


export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="stick top-0 z-50 bg-bg/80 backdrop-blur border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold text-accent">
                    AI Portfolio
                </Link>

                <div className="flex gap-6 text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-accent"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}