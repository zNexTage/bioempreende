// Ref: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
import { useEffect, useRef, useState } from "react";
import style from "./fade-in-section.module.css";

const FadeInSection = ({ className, children, ...rest }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        /*Create an instance of IntersectionObserver with callback function.
        The callback function will be called every time any DOM element 
        registered to this observer changes its "status" 
        (i.e. whenever you scroll, zoom or new stuff comes on screen)
        */
       const observer = new IntersectionObserver(entries => {
           entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        
        // save current ref value to a locally scoped variable
        const elementRef = domRef.current;

        // define the DOM element to observe
        observer.observe(elementRef);
        
        // when the component is disassembles, we remove the DOM observation
        return () => observer.unobserve(elementRef);
    }, []);

    return (
        <section
            ref={domRef}
            className={`${style.FadeInSection} ${isVisible ? style.IsVisible : ''} ${className}`}
            {...rest}
        >
            {children}
        </section>
    )
}

export default FadeInSection;