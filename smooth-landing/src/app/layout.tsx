import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/global.styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
import ReactGA from "react-ga4";
import config from "../../utils/app.config";

export const metadata: Metadata = {
  title: "CARBONHERO",
  description: "CARBONHERO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
    <head>
      <link rel="icon" href="/favicon.ico" />
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.ga_4}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${config.ga_4}', {
                              page_path: window.location.pathname,
                          });
                      `,
        }}
      />
    </head>
    <body className="bodyMain">
      <div className="bodyControl">
        {children}
      </div>
    </body>
  </html>
  );
}
ReactGA.initialize([
  {
    trackingId: config.ga_4,
  }
]);

