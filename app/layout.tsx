import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "WhiskerWish",
    description: "Get a floofy friend today! 🐾",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}