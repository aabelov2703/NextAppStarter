import type { Metadata } from "next";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { AppContextProvider } from "@/context/appContext";
import TopBtn from "@/components/ui/buton/top-btn";

export const metadata: Metadata = {
  title: "Base App",
  description: "Basement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className="min-h-screen">
          <main className="flex items-center flex-col relative">
            <TopBtn />
            <Nav />
            <section className="flex flex-col max-w-[1128px] w-full items-center my-10">
              {children}
            </section>
          </main>
        </body>
      </AppContextProvider>
    </html>
  );
}
