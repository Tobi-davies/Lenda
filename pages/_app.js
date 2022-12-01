import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <div className="bg-darkNavyBlue">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
