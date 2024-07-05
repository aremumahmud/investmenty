import Header from "./Header";
import AssetHero from "./assetHero";
import Footer from "./footer";
import firm from "../assets/hire.jpg";
import "../css/firm.css";
import Content from "./content";

import firm_cover from "../assets/hire-cover.jpg";
import sky from "../assets/sky1.jpg";
import Question from "./question";
import ceo from "../assets/profile-pic 11.png";
import Button from "./button";
import ButtonApply from "./btnapply";

let qa = [
  {
    q: "Investment Management",
    a: "Work with our expert teams to develop and manage investment portfolios that drive growth and maximize returns.",
  },
  {
    q: "Real Estate",
    a: `Be part of a team that identifies and manages high-quality real estate investments across various sectors.
    `,
  },{
    q:'Private Equity',
    a:`Collaborate with visionary entrepreneurs and businesses to unlock potential and create sustainable value.
    `
  },{
    q:'Technology and Innovation',
    a: `Drive technological advancements and support the development of groundbreaking solutions.
    `
  },
  {
    q:'Renewable Power',
    a:`Contribute to sustainable energy projects and help build a cleaner, more resilient future.
    `
  },{
    q:'Finance and Operations',
    a:`Support the financial backbone of our firm with roles in corporate finance, structured finance, and operations.
    `
  }
];



function Career() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <AssetHero image={firm} name={"Careers"} />
      <Content
        content={[
          {
            title: "Careers",
            content: (
              < >
                <div className="segment">
                  <p className="content_writup">
                    Our perspectives are slightly different. We think that the
                    secret to our success is having team members that are
                    creative, inquisitive, and collaborative thinkers. They help
                    us analyze investments and apply the lessons learned from
                    the past to shape our exciting future. At Gullbridge, we
                    make investments in development and retention in addition to
                    recruitment. Our goals are to reward achievement, honor
                    talent, and value hard work.
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
        <p className="title_Y" style={{ width: "100%", textAlign: "center" }}>
          Why Join Us
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
          <div className="text_sec career">
            <div className="segment">
              <p className="content_title"> Innovative Environment</p>
              <p className="content_writup">
                At Gullbridge, we embrace innovation in everything we do. Our
                cutting-edge technologies and forward-thinking strategies
                provide an exciting environment where you can leverage your
                skills and creativity to drive meaningful impact.
              </p>
            </div>
            <div className="segment">
              <p className="content_title"> Professional Development</p>
              <p className="content_writup">
                We are committed to your growth. Our comprehensive training
                programs, mentorship opportunities, and continuous learning
                initiatives ensure that you have the resources and support
                needed to advance your career and achieve your professional
                goals.
              </p>
            </div>
            <div className="segment">
              <p className="content_title">Collaborative Culture</p>
              <p className="content_writup">
                We believe that collaboration is key to success. Our
                team-oriented culture fosters open communication, teamwork, and
                the sharing of ideas, creating a supportive and inclusive
                workplace where everyone can thrive.
              </p>
            </div>
            <div className="segment">
              <p className="content_title">Diverse Opportunities</p>
              <p className="content_writup">
                With business segments spanning asset management, real estate,
                private equity, technology and innovation, renewable power, and
                finance, we offer a wide range of career opportunities. Whether
                you're an experienced professional or just starting your career,
                you can find your niche at Gullbridge.
              </p>
            </div>
            <div className="segment">
              <p className="content_title">Commitment to Excellence</p>
              <p className="content_writup">
                Excellence is at the core of our business. We set high standards
                for ourselves and our team, striving for exceptional performance
                in every aspect of our work. If you are driven by excellence and
                looking to make a significant impact, Gullbridge is the place
                for you.
              </p>
            </div>
            <div className="segment">
              <p className="content_title">Client-Centric Approach</p>
              <p className="content_writup">
                Our clients are at the heart of everything we do. By joining our
                team, you will play a crucial role in understanding and meeting
                the unique needs of our clients, helping them achieve their
                financial goals and build their futures.
              </p>
            </div>
            <div className="segment">
              <p className="content_title">Sustainability and Responsibility</p>
              <p className="content_writup">
                We are committed to sustainable and responsible investing. Join
                us in making a positive impact on the world by integrating
                environmental, social, and governance (ESG) considerations into
                our investment processes.
              </p>
            </div>
          </div>
        </div>


      </div>
      
      <div className="firm_about">
      <div className="questions">
            <p className="q_title" style={{marginBottom:'.5rem'}}>
                Career Paths
            </p> 
            <p style={{fontWeight:'300', marginBottom:'3rem'}}>
            Explore a variety of career paths at Gullbridge:
            </p>
           {
                qa.map((data)=>{
                    return <Question key={1} q={data.q} a={data.a}/>
                })
            }

<br /><br />
<p className="q_title" style={{marginBottom:'1.3rem'}}>
                Join Us
            </p>
            
            <p style={{fontWeight:'300', marginBottom:'3rem'}}>  Are you ready to take your career to the next level? Explore our current job openings and discover how you can make a difference at Gullbridge. We are
always looking for talented individuals who share our passion for excellence and innovation.</p>
<a className='bout' style={{marginLeft:'0'}} ><ButtonApply /></a>
      </div>
      </div>
      <br />
      <br />
   

      <Footer />
    </>
  );
}

export default Career;
