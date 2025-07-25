import React from 'react';
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>

        </main>
    )
}
export default App
