import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import SubHeader from "@/components/shared/subHeader/SubHeader";
import Footer from "@/components/shared/footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Joule Engineering",
  description:
    "Joule Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <SubHeader />
        <Header />
        <main className="flex-1">
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#1D1D1B",
                color: "#fff",
                borderRadius: "8px",
                border: "1px solid #333",
              },
            }}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
