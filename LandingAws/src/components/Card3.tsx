
// const Card3 = [

import { FaCheckCircle } from "react-icons/fa"

// ]


export const Card3 = () => {
  return (
	<div className="flex flex-col md:flex-row justify-center md:space-x-4 px-16">
		<div className="w-full md:w-1/2 flex flex-col justify-center items-center rounded-lg h-[350px] space-y-2"> 
			<div className="bg-gray-200 rounded-lg px-5 py-5 flex flex-col  space-y-1">
				<h1 className="font-bold text-xl">Montly Subcription</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni deserunt</p>
				<p><span className="font-bold text-xl">S/49</span>/mONTH</p>
				<div>
				<button className="bg-white mt-5 border-green-500 border-[1px] hover:bg-green-500 hover:text-white py-2 px-8 rounded-full text-black font-semibold w-full md:w-auto">
					Erroll now 
				</button>	
				</div>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back portad l5k grelka</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back por ñlkgprle tada</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back por ñlkgprle tada</span>
			</div>
		</div>
		<div className="w-full md:w-1/2 flex flex-col justify-center items-center rounded-lg h-[350px] space-y-2"> 
			<div className="bg-gray-200 rounded-lg px-5 py-5 flex flex-col  space-y-1">
				<h1 className="font-bold text-xl">Montly Subcription</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni deserunt</p>
				<p><span className="font-bold text-xl">S/49</span>/mONTH</p>
				<div>
				<button className="bg-white mt-5 border-green-500 border-[1px] hover:bg-green-500 hover:text-white py-2 px-8 rounded-full text-black font-semibold w-full md:w-auto">
					Erroll now 
				</button>	
				</div>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back portad l5k grelka</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back por ñlkgprle tada</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back por ñlkgprle tada</span>
			</div>
		</div>
	</div>
  )
}
