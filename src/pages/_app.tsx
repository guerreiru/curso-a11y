import { useEffect } from 'react';
import { accessibilityReport } from '../utils/axe';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    accessibilityReport();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
