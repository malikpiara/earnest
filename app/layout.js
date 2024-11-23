import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Earnest Cards",
  description: "Questions for more meaningful conversations.",
  manifest: '/manifest.js',
  themeColor: '#BEB3FF',
  appleWebAppCapable: 'yes',
  appleWebAppStatusBarStyle: 'default',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
