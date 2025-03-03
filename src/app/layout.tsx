import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Metrics from "@/components/metrics";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venture Capital Financing for Early Stage | Turbostart",
  description:
    "Turbostart provides venture capital financing to seed and pre-series startups. We also provide expert mentorship and access to a global resource nexus.",
  keywords: "Venture Capital Financing",
  alternates: {
    canonical: "https://turbostart.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NL4P3S3N');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NL4P3S3N"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <GoogleTagManager gtmId="GTM-NL4P3S3N" />

        <Header />
        {children}
        <Metrics />
        <Footer />
      </body>
    </html>
  );
}
