import Layout from '@/components/layout';
import ThinkTrueProvider from '@/context/ThinkTrueContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThinkTrueProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThinkTrueProvider>
  );
}
