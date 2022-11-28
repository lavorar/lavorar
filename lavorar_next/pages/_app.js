import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from "react-query";
import LayoutProvider from '/context/LayoutContext'

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>

    </QueryClientProvider>

  )
}

export default MyApp
