import {AuthProvider} from "@/components/providers/AuthProvider";
import "@/styles/globals.css";
import {NextPage} from "next";
import type {AppProps} from "next/app";
import {ReactNode, ReactElement} from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}
