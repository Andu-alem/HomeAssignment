'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useAuth } from '@/hooks/auth'


const Layout = ({ children }) => {
    const { user, logout } = useAuth()
    return (
        <div className="">     
            <Header user={ user } logout={ logout } />
                {children}
            <Footer />
        </div>
    )
}

export default Layout
