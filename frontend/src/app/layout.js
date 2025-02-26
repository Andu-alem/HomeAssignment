//import { Nunito } from 'next/font/google'
import '@/app/global.css'

import { ContextProvider } from '@/lib/context'


const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased bg-gray-100">
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
