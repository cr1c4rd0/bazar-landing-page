import '../styles/globals.css'
import { UseContextProvider } from '../context/contexts';

function MyApp({ Component, pageProps }) {
  return (
  <UseContextProvider>
    <Component {...pageProps} />
  </UseContextProvider>
  );
}

export default MyApp
