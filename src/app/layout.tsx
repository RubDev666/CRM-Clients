import type { Metadata } from "next";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"; 

config.autoAddCss = false; 

import { MainLayout } from "@/components";

export const metadata: Metadata = {
    title: "CRM-Clients",
    description: "Basic CRM for any business, or small company, even for personal use.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='min-h-screen bg-primary'>
                <MainLayout>
                    {children}
                </MainLayout>
            </body>
        </html>
    );
}
