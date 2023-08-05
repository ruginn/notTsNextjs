import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight:['400', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Testing NextJs',
  description: 'this is testing',
  keywords: 'these, are, the, key, words'
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <h1>this is the header</h1>
    //   <body className={inter.className}>{children}</body>
    // </html>
    <div>
      <h1>This is the header</h1>
      <body className={poppins.className}>
        {children}
      </body>
    </div>
  )
}
