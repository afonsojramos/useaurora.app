import { AppWrapper } from "../components/AppWrapper";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps, ...rest }) => {
  return (
    <AppWrapper {...rest}>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
