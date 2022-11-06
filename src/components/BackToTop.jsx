export default function BackToTop() {
    return(
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed -rotate-90 bottom-20 right-0 z-10 group hover:cursor-pointer">
            <span className="absolute top-3 w-12 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 origin-left ease-linear duration-300"></span><span className="absolute bottom-0.5 left-10 w-3 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 group-hover:-rotate-45 origin-left ease-linear delay-300 duration-300"></span><span className="absolute top-1 left-10 w-3 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 group-hover:rotate-45 origin-left ease-linear duration-300 delay-300"></span><p className="font-semibold text-orange group-hover:translate-x-16 ease-linear duration-300">BACK TO TOP</p>
        </div>
    )
}