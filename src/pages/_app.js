import Layout from '@/components/layout';
import Overlay from '@/components/overlay';
// import Transition from '@/components/transition';
import ThinkTrueProvider from '@/context/ThinkTrueContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThinkTrueProvider>
      <Overlay />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThinkTrueProvider>
  );
}
