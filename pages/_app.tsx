import { AppProps } from "next/app";
import { FC } from "react";
import { wrapper } from "../redux/store";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
