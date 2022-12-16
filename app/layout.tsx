import '../styles/globals.css'
import Footer from '../components/common/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        {children} <Footer />
      </body>
    </html>
  )
}
