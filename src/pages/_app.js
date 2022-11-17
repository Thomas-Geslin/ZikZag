import '../styles/globals.css'
import { ColorProvider } from '../context/colorContext'

function MyApp({ Component, pageProps }) {
  return(
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  )
}

export default MyApp
