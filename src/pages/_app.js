import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

// Theme
import "@/styles/globals.css";
import { theme } from "@/config/ThemeConfig";

// Layout
import Layout from "@/shared/Layout";
const outOfLayoutRoutes = ["/without-layout"];

// Providers for all pages
const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default function App({ Component, pageProps }) {
  let { pathname } = useRouter();

  let isOutOfLayout = outOfLayoutRoutes.includes(pathname);

  if (isOutOfLayout)
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );

  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
