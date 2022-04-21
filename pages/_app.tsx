import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavContainer from "../src/components/NavContainer";
import Layout from "../src/components/Layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
