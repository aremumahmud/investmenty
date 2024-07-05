import "../css/proffesion.css";
import "../css/client.css";
import "../css/stats.css";
import {
  FaBriefcase,
  FaCoins,
  FaHandsClapping,
  FaLocationArrow,
  FaLocationPin,
  FaPerson
} from "react-icons/fa6";
// import { FaWandMagicSparkles } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

function Stats() {
 
  let [one , setOne] = useState(0)
  let [two , setTwo] = useState(0)
  let [four, setFour] = useState(0);


  function stopwatch(data) {
    data.forEach((dt) => {
      let { limit, changer } = dt;
      let limit_reached = 0;
      let n = setInterval(() => {
        if (limit === limit_reached ||  limit_reached > limit ) return clearInterval(n);
        changer((prev) => {
          limit_reached++;
          return prev + 1;
        });
      }, 10);
    });
  }

useEffect(() => {  
 

  // 
    // // Configure the scroll reveal animation
    ScrollReveal().reveal(".up", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
    });

    ScrollReveal().reveal(".upto", {
      delay: 400,
      origin: "bottom",
      duration: 800,
      scale: 1,
      beforeReveal: ()=> stopwatch([
        { limit: 9, changer: setFour },
        { limit: 150, changer: setOne },
        { limit: 15, changer: setTwo },
      ]),
    });
  }, [])
  return (
    <div className="profession client stat">
      <p className="client_title up">Our Professional Statistics.</p>
      <div className="some_summary up" >
        <div className="some_wrapper stats upto">
          <div className="some">
            <div className="stt">
              <div className="count">{four}+</div>
              <div>
                <FaHandsClapping color="brown" /> Years of Experience
              </div>
            </div>
            
            <div className="stt">
              <div className="count">{one}+</div>
              <div>
                <FaPerson color="green" /> Investment Profesionals
              </div>
            </div>
            <div className="stt">
              <div className="count">{two}+</div>
              <div>
                <FaLocationArrow color="grey" />Locations
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
