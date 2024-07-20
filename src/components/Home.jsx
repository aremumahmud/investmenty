import { useState } from "react"
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
    let [prev , setprev] = useState('en')
    let [present , setpresent] = useState('en')

    let setmehome = (curr,prev )=>{
        setprev(prev)
        setpresent(curr)
    }

    return(
        <> <Header setmehome={setmehome}  />
        <br /><br /><br /><br />
         <Hero from={prev} to={present} />
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