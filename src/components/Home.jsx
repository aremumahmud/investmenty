import AboutUs from "./About"
import Header from "./Header"
import Hero from "./Hero"
import CompanyValues from "./companyvalues"
import Footer from "./footer"
import New from "./new"
import News from "./news"
import Review from "./our_reviews"
import Our from "./ourprocess"
import OurTeam from "./ourteam"
import Stats from "./stats"
import Why from "./why"

function Home(){
    return(
        <> <Header />
        <br /><br /><br /><br />
         <Hero />
         <CompanyValues /> 
        <div className="container">
        <AboutUs /> 
        </div>
        <Why /> 
       <div className="container">
             <Our />  
             <br /><br />
             <New />
             <br />
             <OurTeam /> 
        </div>
       
       <Stats />
         <br /><br />
         {/* <Review />   */}
         <News />
      <Footer /> 
       
        
         {/* <CompanyValues /> */}
        </>
    )
}

export default Home