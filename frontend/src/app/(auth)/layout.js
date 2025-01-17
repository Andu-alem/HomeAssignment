import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <h1 className="text-3xl font-bold text-zinc-500">CoolMarket</h1>
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
