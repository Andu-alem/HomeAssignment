import { Nunito } from 'next/font/google'
import '@/app/global.css'

import { ContextProvider } from '@/lib/context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})


const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">
                <ContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ContextProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
