import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function fadeUpAnimation() {
    //پاکسازی تریگرهای قبلی
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const elements = gsap.utils.toArray('.animate-fadeup')

    if(elements.length === 0) {
        return
    }

    elements.forEach(elm => {
    gsap.fromTo(elm, {opacity: 0, y: 40}, 
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: elm,
                start: 'top 85%',
                end: "+=100px",
                toggleActions: 'play none none reverse'
            }
        });
  });


}
