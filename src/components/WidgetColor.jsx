import { useContext } from "react";
import { ColorContext } from "../context/colorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons"


export default function WidgetColor() {
    const { color, setColor, secondaryColor, setSecondaryColor } = useContext(ColorContext);

    function activeWidget() {
        const target = document.getElementById('colorWidgetTarget');
        target.classList.toggle('-translate-x-full');
    }

    return(
            <div id='colorWidgetTarget' className='fixed left-0 top-96 z-[200] flex flex-col bg-[#fcfcfc] shadow-lg text-center rounded-br px-6 pt-8 pb-10 -translate-x-full ease-in-out duration-500'>
                <button onClick={activeWidget} className={`absolute top-0 -right-14 bg-${color} p-4 rounded-r shadow-[6px_5px_15px_0px_rgb(0,0,0,0.2)] 650:p-3 650:-right-10`}>
                    <FontAwesomeIcon icon={faPaintRoller} className='w-6 text-white 650:w-4' />
                </button>


                <p className='font-Amiri text-2xl text-slightGrey 650:text-lg'>Choose Color:</p>

                <span className='w-48 h-px bg-[#e5e5e5] absolute top-[70px] left-[50%] translate-x-[-50%] 650:w-32'></span>

                <div className='flex justify-between mt-6'>
                    <button onClick={() => { setColor('orange'); setSecondaryColor('darkBlueBackground'); }} className='font-bold text-sm bg-orange py-4 px-10 rounded text-white mr-5 hover:bg-darkBlueBackground ease-in-out duration-300 650:px-6 650:py-2.5'>CLASSIC</button>
                    <button onClick={() => { setColor('red'); setSecondaryColor('secondaryBlue'); }} className="font-bold text-sm bg-[#ec3b3b] py-4 px-9 rounded text-white hover:bg-[#2e386b] ease-in-out duration-300 650:px-6 650:py-2.5">OTHER</button>
                </div>
            </div>
    )
}