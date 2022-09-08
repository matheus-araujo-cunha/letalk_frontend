import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { LoanProvider } from "./LoanContext";

export const AppProvider = ({ children }) => (
    <LoanProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </LoanProvider>
  );