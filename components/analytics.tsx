'use client';

import Script from 'next/script';

export function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0ZGNKS2XBV`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZGNKS2XBV', {
              page_path: window.location.pathname,
              debug_mode: true
            });
          `,
        }}
      />
    </>
  );
}