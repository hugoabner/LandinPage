
export const Banner2 = () => {
  return (
	<div className="md:flex w-full justify-center space-x-2 mt-10">
		<div className="md:w-1/2 flex flex-col h-full items-center mt-10">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR852GLA3Q3jR3oMPSf7sA4ODFgGkjefdappc4GNN-YJ7uE3Dau" className="h-[400px]" alt="" />
		</div>
		<div className="md:w-1/2 flex flex-col space-y-2">
			<div className="space-y-10">
				<h1 className="text-xl font-bold text-green-500">| The marketing toolkit</h1>
				<h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold">Mastering Proveen Strategies that Drive real Result </h1>
				<p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum minus asperiores temporibus vtem, quaerat possimus inventore adipisci!</p>
				<button className="bg-green-500  border-green-500 border-[1px] hover:bg-white hover:text-black py-2 px-4 rounded-full text-white font-semibold w-full md:w-auto">
					Erroll now 
				</button>
				<div className="flex space-x-2 ">
				<div className="flex flex-col space-x-3">
					<h1 className="text-xl font-bold">Premium resources</h1>
					<p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum minus asperiores</p>
					<a className="text-green-500" href="https://react-icons.github.io/react-icons/icons/gr/">hola </a>
				</div>
				<div className="flex flex-col space-x-3">
					<h1 className="text-xl font-bold">Premium resources</h1>
					<p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum minus asperiores</p>
					<a className="text-green-500" href="https://react-icons.github.io/react-icons/icons/gr/">hola </a>
				</div>
				</div>

			</div>
		</div>
		
	</div>
  )
}
