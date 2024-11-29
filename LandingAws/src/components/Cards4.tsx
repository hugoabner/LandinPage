import { BiStar } from "react-icons/bi";

interface CardItem {
	title: string;
	description: string;
  icon: (props: { className: string }) => JSX.Element;}



const Cards4: CardItem[] = [
  {
    title: "Great Service",
    description: "This is a description of the great service we provide.",
    icon: ({ className }) => <BiStar className={className} /> // Example icon (Font Awesome)
  },
  {
    title: "Excellent Quality",
    description: "Our products are of the highest quality.",
    icon: ({ className }) => <BiStar className={className} /> // Example icon (Font Awesome)
  },
  {
    title: "Customer Satisfaction",
    description: "We ensure our customers are always happy.",
    icon: ({ className }) => <BiStar className={className} /> // Example icon (Font Awesome)
  },
  {
    title: "Great Service",
    description: "This is a description of the great service we provide.",
    icon: ({ className }) => <BiStar className={className} /> // Example icon (Font Awesome)
  },
  {
    title: "Excellent Quality",
    description: "Our products are of the highest quality.",
    icon: ({ className }) => <BiStar className={className} /> // Example icon (Font Awesome)
  },
  {
    title: "Customer Satisfaction",
    description: "We ensure our customers are always happy.",
    icon: ({ className }) => <BiStar className={className} /> // Example icon (Font Awesome)
  },
  // Add more items as needed
];

const WhatTheySay = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-center font-semibold">What they say about us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-9 mt-10">
        {Cards4.map((item, index) => (
          <div key={index} className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg p-6">
            <div className="items-center space-x-4">
              <div className="flex text-yellow-500 p-2 rounded-full">
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
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default WhatTheySay;
