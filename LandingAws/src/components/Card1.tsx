import { FaStar } from 'react-icons/fa'; // Importar el ícono de estrella

const Card = [
	{icon: FaStar, title:"Money back portada", description:"Money back portada"},
	{icon: FaStar, title:"Money back portada", description:"Money back portada"},
	{icon: FaStar, title:"Money back portada", description:"Money back portada"},

]


export const Card1 = () => {
  return (
	<div className="">
		<h1 className="text-2xl">What they say about us </h1>
		<div className=" space-y-10 md:space-y-0 md:space-x-10 md:flex justify-between px-9 mt-10">
			{
				Card.map((item, index) => (
						<div key={index} className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg p-4">
						<div className="items-center space-x-4">
							<div className="flex text-yellow-500  p-2 rounded-full">
							<item.icon className="h-4 w-4" />
							<item.icon className="h-4 w-4" />
							<item.icon className="h-4 w-4" />
							<item.icon className="h-4 w-4" />
							<item.icon className="h-4 w-4" />
							</div>
							<h1 className="text-xl font-bold">{item.title}</h1>
						</div>
						<p className="mt-2 text-gray-700">{item.description}</p>
						</div>

				))
			}

		</div>

	</div>
  )
}
