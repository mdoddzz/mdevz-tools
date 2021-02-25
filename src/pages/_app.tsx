import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import StandardLayout from '../components/StandardLayout/StandardLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StandardLayout>
      <Component {...pageProps} />
    </StandardLayout>
  )
}

export default MyApp