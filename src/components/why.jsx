import '../css/why.css'
import a1 from '../assets/s11.jpg'
import a2 from '../assets/s2.jpg'
import a3 from '../assets/solar.jpg'
import a4 from '../assets/s4.jpg'
import a5 from '../assets/s5.jpg'
import a6 from '../assets/s10.jpg'

import 'animate.css'

function Why(){

   

    return (
        <div className="why_us" id='services'>
          <p className="title_Y">Our Business Segment</p>
          <div className="images">
            <div className="image up">
                <div className="text">
                    <p>Asset Management</p>
                    <p>Optimize your wealth with our expert asset management solutions.</p>
                </div>
                <img src={a4} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Private Equity</p>
                <p>Unlock growth potential with our private equity expertise </p>
            </div>
                <img src={a5} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Real Estate</p>
                <p>Maximize returns with strategic real estate investments</p>
            </div>
                <img style={{height:"340px"}} src={a6} alt="" />
            </div>
          </div>
          <br />
          <div className="images">
            <div className="image up">
                <div className="text">
                    <p>Technology & Innovation</p>
                    <p>Drive future growth with tech & innovation investments</p>
                </div>
                <img style={{height:"340px"}}  src={a1} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Finance & Credit</p>
                <p>Achieve financial success with tailored credit strategies </p>
            </div>
                <img  src={a2} alt="" />
            </div>
            <div className="image up">
            <div className="text">
                <p>Renewable Energy & Transition</p>
               
                <p style={{top:'83%'}}>Invest in the future with renewable energy solutions.</p>
            </div>
                <img  style={{height:"340px"}} src={a3} alt="" />
            </div>
          </div>
        </div>
    )
}

export default Why