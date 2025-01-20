import SideBar from '@/app/(admin)/components/SideBar'

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-[30%] lg:w-[25%]">
                <SideBar />
            </div>
            <div className="w-full sm:w-[70%] lg:w-[75%] mt-5">
                { children }
            </div>
        </div>
    )
}

export default AdminLayout