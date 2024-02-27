function SecondCarousel () {
    return(
        <>
            <div className="p-8">
                <h3 className="mb-12 text-4xl"> Shop Collection </h3>

                <div className="w-full grid grid-cols-2  gap-x-6">
                   <div className=" bg-gray-300">
                        <img src="src/assets/images/product-6.png" alt="Headphone" />
                        <div className="pl-4 font-semibold">
                            <h4>Headband</h4>
                            <a href="" className="underline">collection &#8594;</a>
                        </div>
                   </div>

                   <div className="grid grid-rows-2 gap-y-6">
                        <div className=" bg-gray-300">
                            <img src="src/assets/images/product-7.png" alt="Headphone" />
                            <div className="pl-4 font-semibold">
                                <h4>Earbuds</h4>
                                <a href="" className="underline">collection &#8594;</a>
                            </div>
                        </div>

                        <div className=" bg-gray-300">
                        <img src="src/assets/images/product-8.png" alt="Headphone" />
                        <div className="pl-4 font-semibold">
                            <h4> Accessories</h4>
                            <a href=""  className="underline">collection &#8594;</a>
                        </div>
                   </div>


                   </div>

                   
                </div>

            </div>



        </>

    )
}

export default SecondCarousel;
    