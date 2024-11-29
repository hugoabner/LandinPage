
export const Card2 = () => {
  return (
<div className="px-4 py-10 sm:px-8 md:px-16 md:py-16">
  <div className="flex flex-col md:flex-row justify-center md:space-x-4">
    {/* Primer div */}
    <div className="w-full md:w-[70%] flex flex-col md:h-[400px] md:flex-row bg-green-900 rounded-lg h-auto space-y-4 md:space-x-2">
      <div className="hidden xl:block">
         <div className="rounded-lg w-full md:w-[120px] h-[250px] sm:h-[300px] md:h-[350px] text-green-500 shadow-lg flex flex-col items-center justify-start p-4">
        <span className="text-xl font-semibold mb-4">02</span>
        <div className="text-green-500 transform rotate-90 flex items-center justify-center w-[150px] h-[40px] font-bold">
          Digital marketing
        </div>
      </div>
      </div>
     
      
    <div className="flex flex-col justify-center text-white w-full md:w-[70%]  px-4 md:px-16 space-y-6">
        <h1 className="text-2xl font-bold">Fundamentals of marketing</h1>
        <p className="text-lg">loremlvl rjvnsejkrverkc3kr fkrjnckewjr vrjn verjvnsejkrverkc3kr fkrjnckewjr vrjn</p>
        <div>
          <button className="bg-green-500 px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-start py-6 px-4 md:px-10 w-full md:w-[40%]">
        <img className="rounded-2xl w-full h-auto" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRH57mxfhM3QjQFXsHeqW1LWE4Q9wGLOmVYyqOPMxvcjAGw8kzl" alt="image" />
      </div>
    </div>

    {/* Segunda fila de tarjetas */}
    <div className="hidden xl:block ">
       <div className=" flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-8 mt-4 md:mt-0 ">
      <div className="rounded-lg w-full sm:w-[200px] md:w-[120px] h-[250px] sm:h-[300px] md:h-[350px] bg-green-100 text-green-500 shadow-lg flex flex-col items-center justify-start p-4 mb-4 md:mb-0">
        <span className="text-xl font-semibold mb-4">02</span>
        <div className="text-green-500 transform rotate-90 flex items-center justify-center w-[150px] h-[40px] font-bold">
          Digital marketing
        </div>
      </div>

      <div className="rounded-lg w-full sm:w-[200px] md:w-[120px] h-[250px] sm:h-[300px] md:h-[350px] bg-green-100 text-green-500 shadow-lg flex flex-col items-center justify-start p-4 mb-4 md:mb-0">
        <span className="text-xl font-semibold mb-4">02</span>
        <div className="text-green-500 transform rotate-90 flex items-center justify-center w-[150px] h-[40px] font-bold">
          Digital marketing
        </div>
      </div>
    </div>
    </div>
  </div>
</div>



  )
}
