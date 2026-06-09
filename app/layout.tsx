import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SC KAMARIUS SRL | Construcții Civile, Industriale și Agricole | Craiova",
  description: "SC KAMARIUS SRL – Execuție lucrări de construcții civile, industriale și agricole. Finisaje interioare, șape mecanizate, hidroizolații, zidărie, instalații electrice, mentenanță (Oltenia), consultanță și documentații tehnice. ISO 9001 • ISO 14001. Partener Kaufland România.",
  metadataBase: new URL("https://kamarius.ro"),
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "SC KAMARIUS SRL | Construcții Civile, Industriale și Agricole",
    description: "Finisaje interioare de calitate, șape, hidroizolații, zidărie și mentenanță pentru proiecte rezidențiale, comerciale și industriale. Peste 40 de magazine Kaufland.",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F7F3] text-[#1F2120]">
        {/* Font Awesome for WhatsApp icon (used in floating button) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
