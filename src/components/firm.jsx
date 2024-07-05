import Header from "./Header";
import AssetHero from "./assetHero";
import Footer from "./footer";
import firm from "../assets/m8.jpg";
import "../css/firm.css";
import Content from "./content";


import firm_cover from "../assets/d2.jpg";
import sky from '../assets/sky2.jpg'
import Question from "./question";
import ceo from '../assets/profile-pic 11.png'


let qa = [{
    q:'Institutional Investors',
    a:'For our investors, who include retirement systems that account for more than 70 million pensioners, we have produced gains totaling $238 billion. '
},{
    q:'Individual Investors',
    a:'Through our connections with financial advisors, we are able to enable access to institutional-quality assets and private markets, managing $241 billion in AUM from the private wealth channel. '
}]

let qa1 = [{
    q:'Innovation at the Forefront of Investing',
    a:`Our people are relentless in seeking a better way. Each day, we reimagine and refine our strategies, models and technology in pursuit of superior results and longterm performance.
    `
},{
    q:'Capturing Market Opportunities',
    a:`Our thinking reveals possibilities unimagined by others. Together, we move swiftly to capture opportunities in the markets.
    `
},{
    q:'Collaboration',
    a:`We believe in the power of teamwork, fostering a collaborative environment that harnesses the expertise and creativity of our diverse team.
    `
}]

function Firm() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <AssetHero image={firm} name={"The Firm"} />
      <Content
        content={[
          {
            title: "The Firm",
            content: (
              <>
                <div className="segment">
                  <p className="content_writup">
                    {" "}
                    Gullbridge is a distinguished firm renowned for its diverse
                    portfolio and strategic presence across multiple industries.
                    With a commitment to innovation, sustainable practices, and
                    impactful leadership, the firm has emerged as a global force
                    shaping the future of business and industries.
                    <br />
                    <br />
                    We cultivate strong relationships with shareholders in our
                    firm, where we endeavor to provide objective and insightful
                    solutions and investment that our clients can trust. We
                    believe our scaled, diversified businesses, coupled with our
                    long track record of investment performance, proven
                    investment approach and strong client relationships,
                    position us to continue to perform well in a variety of
                    market conditions, expand our assets under management and
                    add complementary businesses
                  </p>

                  <div className="image_firm">
                    <img src={firm_cover} alt="" />
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
      <div className="why_us firm">
        <p className="title_Y" style={{ width: "100%" }}>
          What We Build
        </p>
        <p className="content_Y">
          At Gullbridge, we build tailored investment solutions that drive
          growth and secure financial futures. We construct diversified
          portfolios that span asset management, real estate, private equity,
          technology and innovation, renewable power, and finance, ensuring
          robust, sustainable returns. Our approach integrates cutting-edge
          technology, expert insights, and a deep commitment to our clients’
          unique goals, fostering long-term relationships and delivering
          exceptional value.
        </p>

        <div className="firm_sec">
            <div className="img_sec">
                <img src={sky} alt="" />
            </div>
            <div className="text_sec">
                <div className="segment">
                    <p className="content_title">Build financial security</p>
                    <p className="content_writup">
                    Our goal is to provide exceptional returns to both individual and institutional clients by managing their funds with Integrity and conviction.
                    </p>
                </div>
                <div className="segment">
                    <p className="content_title">Build your career</p>
                    <p className="content_writup">We provide a setting where outstanding talent can establish enduring careers. Being a part of Blackstone means being at the forefront of new trends and establishing industry standards.
</p>
                </div>
                <div className="segment">
                    <p className="content_title">Build strong businesses</p>
                    <p className="content_writup">We provide companies with a wide range of resources and competencies that they require to expand.
</p>
                </div>
            </div>
        </div>
      </div>
      <br /><br />
      <div className="firm_about">
      <div className="questions">
            <p className="q_title">
                Our Clients
            </p> 
            {
                qa.map((data)=>{
                    return <Question key={1} q={data.q} a={data.a}/>
                })
            }
          
        </div>
      </div>
      <div className="why_us firm center_firm">
      <div className="firm_sec around">
            <div className="img_sec ceo">
                <img src={ceo} alt="" />
            </div>
            <div className="text_sec">
                <div className="segment">
                   
                    <p className="content_writup quote">{`
                    "Our ability to innovate, use outstanding personnel, diversify our investments, put the requirements of our clients first, and maintain our dedication to sustainability
                    and excellence allows us to stay one step ahead of the competition.
                    "`}
                    </p>
                    <div className="author">
            <p>Joseph Mozube</p>
            <p>Chairman & CEO </p>
         </div>
                </div>
                </div>
         </div>
         
      </div>
      <br /><br />
      <div className="firm_about">
      <div className="questions">
            <p className="q_title">
                We also do ....
            </p> 
            {
                qa1.map((data)=>{
                    return <Question key={1} q={data.q} a={data.a}/>
                })
            }
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Firm;
