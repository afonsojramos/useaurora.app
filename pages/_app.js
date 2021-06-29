import { ThemeProvider } from "next-themes";
import { AppWrapper } from "../components/AppWrapper";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps, ...rest }) => {
  return (
    <ThemeProvider attribute="class">
      <AppWrapper {...rest}>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default MyApp;
