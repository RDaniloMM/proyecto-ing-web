import "./globals.css";

// Componentes de Contexto
/* import { ThemeProvider } from "@/components/context/ThemeProvider";*/
import { QueryProvider } from "@/components/context/QueryProvider";

// Utilidades
/* import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site"; */
/* 
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urlBase),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.urlBase,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author,
  },
  icons: {
    icon: "/favicon.ico",
  },
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body
      /* className={cn(
          "min-h-screen font-sans antialiased bg-[url('/patterns/bubbles.svg')] bg-lime-50/20 dark:bg-none",
          fontSans.variable
        )} */
      >
        <QueryProvider>
          {/*<ThemeProvider />}
        {/* attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          > */}
          {children}
          {/* <Analytics />
          </ThemeProvider> */}
        </QueryProvider>
      </body>
    </html>
  );
}
