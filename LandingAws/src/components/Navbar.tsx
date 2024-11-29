
const Navbar = () => {
  return (
    <>
    <div className="bg-green-900 py-2 text-white flex justify-center">
  <div className="text-center">
    Open your account here to get cashback up to 10% on your next purchase
  </div>
</div>

<div className="py-5 px-2">
  <div className="bg-white px-5 md:px-10 flex flex-wrap justify-between shadow-xl py-5 rounded-lg">
    {/* Logo */}
    <div className="flex-grow md:flex-grow-0 text-center md:text-left">
      <span className="font-bold text-black text-2xl">STRATLAB</span>
    </div>

    {/* Navigation Menu */}
    <div className="flex-grow md:flex-grow-0 mt-4 md:mt-0">
      <ul className="font-semibold flex flex-wrap justify-center md:justify-end space-x-5 md:space-x-16">
        <li>Service</li>
        <li>Why us</li>
        <li>Testimonial</li>
        <li>Faq</li>
        <li>About</li>
      </ul>
    </div>

    {/* Buttons */}
    <div className="flex-grow md:flex-grow-0 mt-4 md:mt-0 text-center md:text-right">
      <div className="space-y-3 md:space-y-0 md:space-x-3">
        <button className="border-green-500 hover:bg-green-500 hover:text-white border-[1px] py-2 px-4 rounded-full text-black font-semibold w-full md:w-auto">
          Login
        </button>
        <button className="bg-green-500 border-green-500 border-[1px] hover:bg-white hover:text-black py-2 px-4 rounded-full text-white font-semibold w-full md:w-auto">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>

   </>
  )
   
	
}

export default Navbar