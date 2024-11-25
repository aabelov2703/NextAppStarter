import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "@/context/app-context";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/context/theme-context";
import NavBar from "@/components/nav/nav-bar";

export const metadata: Metadata = {
  title: "Next",
  description: "Base Layer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen text-foreground bg-background">
        <ThemeProvider>
          <AppContextProvider>
            <NavBar />
            <main className="flex grow w-full min-w-[300px] lg:w-[1024px] mt-10 p-4 md:p-8">
              {children}
            </main>
            <Footer />
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
