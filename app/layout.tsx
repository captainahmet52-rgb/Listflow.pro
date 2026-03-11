import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Listflow - AI Destekli Etsy Otomasyon",
  description: "Etsy satıcıları için yapay zeka destekli otomasyon platformu. Türkiye'deki tedarikçilerle çalışarak ürün listeleme sürecini otomatikleştirin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-bg-primary text-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#12121a',
              border: '1px solid #1e1e2e',
              color: '#ffffff',
              borderRadius: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
