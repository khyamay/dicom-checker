import type { AppProps } from "next/app";

import Footer from "@/components/Footer";
import GlobalStyle from "@/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
