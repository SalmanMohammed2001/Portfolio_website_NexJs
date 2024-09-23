import './globals.css'
import {Inter, Poppins} from 'next/font/google'
import NavBar from "./components/Header/NavBar";
import Footer from './components/footer/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'John Doe - Creative Developer',
  description: 'Portfolio of John Doe, a creative developer and designer',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <div className="continer">
        <NavBar/>
            {children}
         <Footer/>   
        </div>

        </body>
        </html>
    );
}