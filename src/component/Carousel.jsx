import React, { useState, useEffect } from 'react';
import { ChevronLeft ,ChevronRight} from 'lucide-react';

function Carousel() {
    const slides = [
        {
            src: "src/assets/images/sliderimg1.png",
            text: "സൗര മാർഗ്ഗ  സൂര്യനാണ് ഭൂമിയിലെ ഏതൊരു ജീവജാലങ്ങളുടെയും  പ്രഥമ ഊർജ്ജ ഉറവിടം . അതുപോലെ തന്നെയാണ്  ജീവജാലങ്ങളുടെ ഭൗതിക പ്രവർത്തനങ്ങളുടെ ഉറവിടം ട്രാൻസ്പേഴ്സണൽ ഫോഴ്സാണ്. നമ്മളുടെ ശരീര പ്രവർത്തനങ്ങൾ"
        },
        {
            src: "src/assets/images/sliderimg2.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non quaerat est ea amet rem sequi voluptates vero vitae deleniti voluptatibus, velit ad nihil dignissimos dolorum. Placeat eius ipsam nostrum."
        },
        {
            src: "src/assets/images/sliderimg1.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non quaerat est ea amet rem sequi voluptates vero vitae deleniti voluptatibus, velit ad nihil dignissimos dolorum. Placeat eius ipsam nostrum."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto play after 5 seconds
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto play after 5 seconds
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto play after 5 seconds
    };

    useEffect(() => {
        let intervalId;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                goToNext();
            }, 2000); // Change slide every 3 seconds
        }
        return () => clearInterval(intervalId);
    }, [currentIndex, isAutoPlaying]);

    return (
        <div className=" relative w-full bg-gray-100   h-[400px] md:h-[500px] lg:h-[600px] mx-auto overflow-hidden group">
            {/* Slides */}
            <div 
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className="w-full h-full   flex-shrink-0 overflow-hidden "
                    >
                        <div className=' relative  px-10 '>
                        <div className="z-  absolute w-[270px] lg:w-[85%] left-0 bg-opacity-50 mt-10 lg:mt-50 text-black text-center ">
                            <p className="text-xl px-5 chilanka-regular md:text-2xl lg:text-3xl">" {slide.text} "</p>
                        </div>
                        <img 
                            src={slide.src} 
                            alt={slide.text} 
                            className=" absolute top-10 lg:-right-30  -right-42 "
                        />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={goToPrevious}
                className="hidden group-hover:block absolute top-1/2 left-4 transform -translate-y-1/2 text-red-600 bg-white text-3xl bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
            >
                <ChevronLeft />
            </button>
            <button 
                onClick={goToNext}
                className=" hidden group-hover:block absolute top-1/2 right-4 transform -translate-y-1/2 text-red-600 bg-white text-3xl bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
            >
                <ChevronRight   />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : ' border border-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;