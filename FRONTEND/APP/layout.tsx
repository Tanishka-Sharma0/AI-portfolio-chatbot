import "./globals.css";
import Navbar from "../COMPONENTS/layout/Navbar";
import Footer from "../COMPONENTS/layout/Footer";
import { inter } from "./fonts";
import React from "react";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        < html lang="en" >
            <body className={`${inter.variable}`}>
                <Navbar />
                <main className="min-h-screen max-w-7xl mx-auto px-6 pt-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html >
    );
};
