import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {NavigationMenuDemo} from "@/components/navbar";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="absolute top-0 right-0 pr-20 pt-5">
        <NavigationMenuDemo />
        </div>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={inter.className}>{children} </div>
        </ThemeProvider>
        </body>
        </html>
);
}
