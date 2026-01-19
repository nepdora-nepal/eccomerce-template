import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { CartProvider } from "@/contexts/CartContext";
import { MainLayout } from "@/components/layout/MainLayout";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

import { siteConfigAPI } from "@/services/api/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const config = await siteConfigAPI.getSiteConfig();

  return {
    title: config?.business_name || "SastoBazaar - Premium Shopping Experience",
    description: config?.business_description || "Your ultimate solution for managing sales and customer relationships with cutting-edge technology.",
    icons: {
      icon: config?.favicon || "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <CartProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </CartProvider>
        </QueryProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
