import { FaCheckCircle } from "react-icons/fa"

export const Banner3 = () => {
  return (
	<div className="md:flex w-full justify-center space-x-2 mt-10 py-5">
		
		<div className="md:w-1/2 flex flex-col ml-16 ">
			<div className="space-y-10">
				<h1 className="text-xl font-bold text-green-500">| The marketing toolkit</h1>
				<h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold">Mastering Proveen Strategies that Drive real Result </h1>
				<p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum minus asperiores temporibus vtem, quaerat possimus inventore adipisci!</p>
				
				<div className="flex flex-col space-y-1">
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money f34fpo4 f34oif3 back portada</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back portad l5k grelka</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back por ñlkgprle tada</span>
				<span className="flex font-semibold"><FaCheckCircle className="text-green-500 bg-white "/>Money back por ñlkgprle tada</span>

				</div>
			</div>
		</div>
		
		<div className="md:w-1/2 flex flex-col h-full items-center mt-10">
			<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCmn815lW7ZX3YCXEJQkrK_nlYuDIQZUoUTXTTJ-wVXVBsD0Jc" className="h-[400px]" alt="" />
		</div>
	</div>
  )
}
