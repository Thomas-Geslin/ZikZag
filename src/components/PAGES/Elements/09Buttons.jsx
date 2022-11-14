export default function ButtonsElement() {
    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-10'>Buttons</p>

            
            <div className='flex'>
                <div className='flex flex-col relative mr-32'>
                    <button className="text-white text-sm font-bold bg-orange rounded py-5 w-[170px] mb-5">LEARN MORE</button>
                    <button className="text-white text-sm font-bold bg-orange rounded py-4 w-[160px] mb-5">LEARN MORE</button>
                    <button className="text-white text-sm font-bold bg-orange rounded py-3.5 w-[150px] mb-5">LEARN MORE</button>
                    <button className="text-white text-sm font-bold bg-orange rounded py-3 w-[140px] mb-5">LEARN MORE</button>
                </div>
                
                <div className='flex flex-col relative'>
                    <button className="text-white text-sm font-bold bg-darkBlueBackground rounded py-5 w-[170px] mb-5">LEARN MORE</button>
                    <button className="text-white text-sm font-bold bg-darkBlueBackground rounded py-4 w-[160px] mb-5">LEARN MORE</button>
                    <button className="text-white text-sm font-bold bg-darkBlueBackground rounded py-3.5 w-[150px] mb-5">LEARN MORE</button>
                    <button className="text-white text-sm font-bold bg-darkBlueBackground rounded py-3 w-[140px] mb-5">LEARN MORE</button>
                </div>
            </div>
        </section>
    )
}