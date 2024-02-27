function HeroSection() {

    return (
        <>
           <div className=" h-[62vh] pt-32 space-x-12 flex justify-center items-center  bg-amber-300">
                <img src="src/assets/images/heroimg.png" alt="a man listening music" className=""/>
                <div>
                    <h1 className="text-5xl font-semibold"> Listen to the<br/> <span className="text-green-500 ">amazing</span> <br/> music sound</h1>
                    <p className="text-l p-2">Experience music like never before</p>

                    <button className="p-2 px-4 mx-16 rounded-lg bg-black text-white">Shopping Now</button>

                </div>
           </div>

           


        </>
    )
}

export default HeroSection;