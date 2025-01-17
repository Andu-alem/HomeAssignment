import { Nunito } from 'next/font/google'
import '@/app/global.css'

import { ContextProvider } from '@/lib/context'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})


const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">
                <ContextProvider>
                    {children}
                </ContextProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'CoolMarket',
}

export default RootLayout
