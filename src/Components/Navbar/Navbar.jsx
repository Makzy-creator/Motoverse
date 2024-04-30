
const Navbar = () => {
  return (
    <div className="navbar w-full h-[80px] bg-white border-b-2">
    <div className="max-w-[1200px] m-auto w-full h-full flex justify-between">
        {/* <img src={logo} alt="" /> */}
        <div className="flex items-center">
            <ul className="flex gap-4">
                <li>About</li>
                <li>Technology</li>
            </ul>
        </div>

        <div className="">
            <h5>Country</h5>
            <h5>USDC</h5>

            <button className="px-8 py-3 rounded-md bg-[#3D6470]">Login</button>
        </div>
    </div>
</div>
  )
}

export default Navbar

