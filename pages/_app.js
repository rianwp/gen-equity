import '../styles/globals.css'
import Navbar from '../components/Navbar'
import PageTransition from '../components/GlobalComponents/PageTransition'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar/>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  )
  
}

export default MyApp
