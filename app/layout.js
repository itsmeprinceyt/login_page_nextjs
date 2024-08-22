import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login Page - ItsMe Prince",
  description: "A modern and secure login page built with Next.js and Tailwind CSS. This responsive design ensures a seamless user experience, providing a smooth and intuitive interface for authentication.",
  keywords: "login page, authentication, Next.js, Tailwind CSS, ItsMe Prince, web development, secure login",
  author: "Mohd Uvaish",
  icons: {
    icon: "/user.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <Navbar/>
        {children}
        </div>
        </body>
    </html>
  );
}
