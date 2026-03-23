// import type { Metadata } from "next";
import { Montserrat, Roboto } from 'next/font/google'
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>BOTTO MAQUINARIAS</title>
        <meta name="description" content="Bienvenido a Botto Maquinarias, tu proveedor confiable de maquinaria agrícola y más. Descubre nuestros productos y servicios." />
        <link rel="icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '603029765997459');
              fbq('track', 'PageView');
            `,
          }}
        ></script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=603029765997459&ev=PageView&noscript=1"
          />
        </noscript>

        <meta name="facebook-domain-verification" content="xnff38v39jri7wgzhx77qk8h46oslw" />

      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} font-sans antialiased
          flex flex-col min-h-screen
          `}
      >
        <div>
          <Header />
          <main>
            {children}
            {/* <SpeedInsights /> */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
