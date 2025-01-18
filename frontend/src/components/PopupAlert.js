
const PopupAlert = ({ show, success }) => {
    return (
        <div className={`${ show ? 'block':'hidden' } fixed bottom-[20px] right-[15px] w-[57%] h-[50px] text-[15px] z-50`}>
            {
                success ? (
                    <div className="w-full h-full flex justify-center items-center bg-green-500 rounded-md text-white">
                        <p>Your orders submitted successfully</p>
                    </div>
                ):(
                    <div className="w-full h-full flex justify-center items-center bg-red-500 rounded-md text-white">
                        <p>Failed to submit your order. Please try again</p>
                    </div>
                )
            }
        </div>
    )
}

export default PopupAlert