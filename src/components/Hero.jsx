import "../css/hero.css";

import { useEffect, useState } from "react";

import Button from "./button";

import B1 from "../assets/hero5.jpg"
import B2 from "../assets/IMG-20240526-WA0130.jpg"
import B3 from "../assets/IMG-20240526-WA0133.jpg"

function Hero() {
  // useEffect(() => {
  //   // Configure the scroll reveal animation
  //   ScrollReveal().reveal(".up", {
  //     delay: 200,
  //     origin: "bottom",
  //     duration: 800,
  //     scale: 1,
  //   });
  // });

  let [hero , setHero] = useState(0)
  let bb = ""
let subtext = ["Designed to enhance your portfolio and protect your investments, our Asset Management Solutions span multiple markets and asset classes. Let’s build resilience together.","Our robust risk management strategies ensure absolute returns, empowering you to navigate market fluctuations with peace of mind. Let's build a resilient investment plan together.","Our expert strategies provide you with the edge needed to navigate dynamic markets. Let's harness these insights together for your investment success."]
let tests = ["Unlock Diversification with Our Asset Management Solutions"," Invest Confidently: Absolute Returns with Robust Risk Management",'Unlock Market Insights: Stay Ahead with Gullbridge’s Expert Strategies']
let animations = [
  "animate__animated animate__fadeInLeft",
  "animate__animated animate__fadeInDown",
  "animate__animated animate__fadeInLeft"
]

let images = [B2,B1,B3]
  useEffect(()=>{
     
    let interval = setInterval(()=>{
      
      setHero(onting => onting >= 2 ? 0: (onting + 1))
    } , 5000)

    return ()=>clearInterval(interval)
}, [])

  return (
    <>
      {" "}
      <div className="hero " style={{  backgroundImage: `url(${images[hero]})`}}>
        <div className="section1">

          <p className={"main up "+ animations[hero]}>
            {console.log(hero)}
           {tests[hero]}
          </p>
          <p className={"write_up up "+ animations[hero]}>
            <div className="line"></div>
            <span>{subtext[hero]}</span>
         
          </p>
          <a href="https://forms.gle/5WFuiwxC4BC7jTbs5"><Button /></a>
          <br />
        </div>
        {/* <br /> */}
      </div>
    </>
  );
}

export default Hero;
