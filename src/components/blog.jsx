
import Header from "./Header"

import AssetHero from "./assetHero"
import Content from "./content"
import Footer from "./footer"


function Blog({data , image}){
    return (
<>
<Header />
<br /><br /><br /><br />
<AssetHero data={data} image={image} name={data?.title}/>
<Content content={[data]} />
<Footer />
</>
    )
}

export default Blog