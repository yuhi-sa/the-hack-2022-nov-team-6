import Header from '../components/common/Header'
import '../styles/globals.css'
import Footer from '../components/common/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head　/>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
