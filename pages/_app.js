import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Box padding={"20px"} paddingTop={"200px"} backgroundColor={"#272D38"} height={"100vh"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
