"use client";

import React from "react";
import Typed from 'typed.js';

export default function Typing() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Full-Stack', 'JavaScript', 'PHP', 'Python'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
        <span ref={el} />
    );
}