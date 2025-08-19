import { useEffect, useState } from "react";
import bolo1 from '../../../assets/imgs/bolo_rosa1.jpg'
import bolo2 from '../../../assets/imgs/bolo_rosa2.jpg'
import bolo3 from '../../../assets/imgs/bolo_rosa3.jpg'
import bolo4 from '../../../assets/imgs/bolo_rosa4.jpg'

export default function Carousel3D() {
    const [angle, setAngle] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const imagens = [
        bolo1.src,
        bolo2.src,
        bolo3.src,
        bolo4.src,
        bolo1.src,
    ];


    useEffect(() => {
        if (isPaused) return; // pausa quando isPaused = true

        const step = 360 / imagens.length;
        const interval = setInterval(() => {
            setAngle((prev) => prev - step);
        }, 3000);

        return () => clearInterval(interval);
    }, [imagens.length, isPaused]);


    const rotate = (direction) => {
        const step = 360 / imagens.length;
        setAngle((prev) => prev + (direction === "next" ? -step : step));
    };

    return (
        <div className="flex items-center justify-center h-[400px] bg-slate-800 relative m-4">

             <button
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => rotate("prev")}
                    className="absolute left-6 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white/80 text-black hover:bg-white shadow-lg"
                >
                    ◀
                </button>
                
            {/* Container 3D */}
            <div className="relative w-[400px] h-[300px] perspective">
                <div
                    className="absolute w-full h-full transition-transform duration-700"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `translateZ(-500px) rotateY(${angle}deg)`,
                    }}
                >
                    {imagens.map((src, i) => {
                        const step = 360 / imagens.length;
                        return (
                            <img
                                key={i}
                                src={src}
                                alt={`img-${i}`}
                                className="absolute w-[400px] h-[300px] object-cover rounded-xl shadow-lg"
                                style={{
                                    transform: `rotateY(${i * step}deg) translateZ(500px)`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Botões */}       
                <button
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => rotate("next")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white/80 text-black hover:bg-white shadow-lg"
                >
                    ▶
                </button>

            <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
        </div>
    );
}