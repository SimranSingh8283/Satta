import React, { useEffect, useRef } from 'react';

const Parallax = ({ children, dataSpeed }) => {
    const parallaxRef = useRef(null);
    const observer = useRef(null);
    const lastYPos = useRef(0);
    const isIntersecting = useRef(false);

    const handleScroll = () => {
        if (isIntersecting.current) {
            const friction = parallaxRef.current.getAttribute('data-speed') || 0.5;
            let image = parallaxRef.current.querySelector('img');
            let yPos = Math.ceil((window.scrollY - parallaxRef.current.offsetTop) * friction);
            lastYPos.current = yPos;
            if (image) {
                image.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        }
    };

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isIntersecting.current = entry.isIntersecting;
                parallaxRef.current = entry.target;
            });
        });
        // {
        //     rootMargin: "300px 0px 300px 0px"
        // });

        document.addEventListener('scroll', handleScroll);

        // if (window.innerWidth > 991 && parallaxRef.current) {
            observer.current.observe(parallaxRef.current);
        // }

        return () => {
            if (observer.current && parallaxRef.current) {
                observer.current.unobserve(parallaxRef.current);
                observer.current.disconnect();
            }
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax" ref={parallaxRef} data-speed={dataSpeed}>
            {children}
        </div>
    );
};

export default Parallax;
