import {
    LinkIcon
} from '@heroicons/react/24/solid'
import Telegram from '@/components/svgs/Telegram'
import LinkedIn from '@/components/svgs/LinkedIn'
import Facebook from '@/components/svgs/Facebook'
import Instagram from '@/components/svgs/Instagram'


const Footer = () => {
    return (
        <footer className="py-7 h-[100vh] bg-black flex flex-col justify-end">
            <div className="text-white flex justify-center gap-4 my-4">
                <a href="#" target="_blank" className="">
                    <LinkIcon className="w-7 h-7 text-white hover:text-sky-500" />
                </a>               
                <a href="#" target="_blank" className="">
                    <Telegram className="w-7 h-7 text-white hover:text-sky-500" />
                </a>           
                <a href="#" target="_blank" className="">
                    <LinkedIn className="w-7 h-7 text-white hover:text-sky-500" />
                </a>
                <a href="#" target="_blank" className="">
                    <Facebook className="w-7 h-7 text-white hover:text-sky-500" />
                </a>
                <a href="#" target="_blank" className="">
                    <Instagram className="w-7 h-7 text-white hover:text-red-300" />
                </a>
            </div>
            <div className="text-center text-white">
               &copy; Developed by - <a href="https://andufereja-portfolio.netlify.app" className="text-sky-500 hover:text-amber-500" target="_blank">Andualem</a>
            </div>
        </footer>
    )
}

export default Footer