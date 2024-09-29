import './globals.css'
import {Inter, Poppins} from 'next/font/google'
import NavBar from "./components/Header/NavBar";
import Footer from './components/footer/footer';
import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'John Doe - Creative Developer',
  description: 'Portfolio of John Doe, a creative developer and designer',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
      <html lang="en">
          <body className={inter.className}>
              <div className="container">
                  <NavBar />
                  {children}
                  <Footer />
              </div>
          </body>
      </html>
  );
};

export default RootLayout;