'use client'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(admin)/Loading'

const AdminRootLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'admin' })

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
