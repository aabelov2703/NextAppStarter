import type { Metadata } from "next";
import Nav from "@/components/nav";
import "@/styles/globals.css";
import { AppContextProvider } from "@/context/appContext";
import TopBtn from "@/components/ui/buton/top-btn";
import Container from "@/components/common/container";

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
        <body className="min-h-screen flex">
          <main className="flex flex-1 items-center flex-col relative ">
            <TopBtn />
            <Nav />
            <section className="flex flex-col max-w-[1024px] w-full mt-10 sm:px-5 flex-1">
              <Container>{children}</Container>
            </section>
          </main>
        </body>
      </AppContextProvider>
    </html>
  );
}
