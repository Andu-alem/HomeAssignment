'use client'

import { useAuth } from '@/hooks/auth'
//import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(admin)/Loading'

const AdminRootLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'guest' })

    if (!user || user?.role !== 'admin') {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <main>{children}</main>
        </div>
    )
}

export default AdminRootLayout
