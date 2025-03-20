import React from 'react';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      {/* Add your global layout components here, e.g., header, footer */}
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
