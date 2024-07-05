import '../css/companyvalues.css'
import svg1 from '../assets/gea.png'
import svg2 from '../assets/grow-removebg-preview.png'
import svg4 from '../assets/bussiness.png'
import svg3 from '../assets/message-removebg-preview.png'
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function CompanyValues(){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal(".up", {
          delay: 200,
          origin: "bottom",
          duration: 800,
          scale: 1,
        });
    })
    return (
<div className="values_wrap">
{/* <p className="title_v up">Our Company Values</p> */}
<div className="values">
    <div className="value">
        <div className="img up">
 <img src={svg1} alt="" />
        </div>
       <div className="content up">
<p>
Diversified Investment Approach </p>
<p>Maximize returns while minimizing risk by spreading investments across various asset classes and sectors.</p>
       </div>
    </div>
    <div className="value">
    <div className="img up">
              <img src={svg4} alt="" />
            </div>
       <div className="content up">
        <p>
        Advanced Risk Management</p>
        <p>Protect client assets by identifying, assessing, and mitigating risks associated with investments.</p>
       </div>
    </div>
    <div className="value">
    <div className="img up">
             <img src={svg3} alt="" />
            </div>
            <div className="content up">
        <p>
        Client-Centric Solutions </p>
        <p>Build strong, long-lasting relationships by offering personalized investment solutions tailored to each client’s unique needs and goals.</p>
        </div>
    </div>
    <div className="value">
    <div className="img up">
             <img src={svg2} alt="" />
            </div>
            <div className="content up">
        <p>ESG and Sustainable Investing</p>
        <p> Integrate environmental, social, and governance (ESG) criteria into investment processes to promote sustainable growth and responsible investing.</p>
        </div>
    </div>
</div>
</div>
    )
}

export default CompanyValues