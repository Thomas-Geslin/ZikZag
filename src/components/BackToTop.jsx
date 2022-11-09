import { useEffect } from "react";

export default function BackToTop() {
    useEffect(() => {
        // Intersection Obeserver for fixed GoToTop
        const target = document.getElementById('goTopTarget');
        const viewport = document.getElementById('goTopViewport');
    
        const options = {
          root: null,
          treshold: 1.0
        }
    
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(!entry.isIntersecting) target.classList.remove('fixed-goTop');
              if(entry.isIntersecting) target.classList.add('fixed-goTop');
          })
        }, options);
        observer.observe(viewport);
    },[])


    return(
        <div id='goTopTarget' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="invisible -rotate-90 fixed bottom-20 right-0 translate-x-12 opacity-0 group hover:cursor-pointer ease-linear duration-300">
            <span className="absolute top-3 w-12 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 origin-left ease-linear duration-300"></span><span className="absolute bottom-0.5 left-10 w-3 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 group-hover:-rotate-45 origin-left ease-linear delay-300 duration-300"></span><span className="absolute top-1 left-10 w-3 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 group-hover:rotate-45 origin-left ease-linear duration-300 delay-300"></span><p className="font-semibold text-orange group-hover:translate-x-16 ease-linear duration-300">BACK TO TOP</p>
        </div>
    )
}