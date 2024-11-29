import { FaCheckCircle } from "react-icons/fa";



export const Banner = () => {
  return (
	<div className="md:flex w-full justify-center space-x-2">

		<div className="md:w-1/2 flex flex-col space-y-2">
			<div className="space-y-10">
				<h1 className="text-xl font-bold text-green-500">| The marketing toolkit</h1>
				<h1 className="text-2xl p-5 md:text-3xl lg:text-4xl xl:text-7xl font-bold">Mastering Proveen Strategies that Drive real Result </h1>
				<p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum minus asperiores temporibus veritatis hic, ab est itaque odit veniam ad amet eum dignissimos ratione autem, quaerat possimus inventore adipisci!</p>
				<button className="bg-green-500  border-green-500 border-[1px] hover:bg-white hover:text-black py-2 px-4 rounded-full text-white font-semibold w-full md:w-auto">
					Erroll now 
				</button>
				<div className="flex space-x-2">
					<span className="flex items-center space-x-3"><FaCheckCircle className="text-green-500 bg-white "/>Money back portada</span>
					<span className="flex items-center space-x-3"><FaCheckCircle className="text-green-500 bg-white "/>Money back portada</span>
					<span className="flex items-center space-x-3"><FaCheckCircle className="text-green-500 bg-white "/>Money back portada</span>
				</div>
			</div>
		</div>
		<div className="md:w-1/2 flex flex-col">
			<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeHi72suN7AfCoeR0lrLqSpB6egoPnFIZs7AOqRwRHM6vDjIzE" alt="" />
		</div>
	</div>
	
  )
}
