
import Header from "./Header"

import AssetHero from "./assetHero"
import Content from "./content"
import Footer from "./footer"
import Questions from "./questions"

function AssetInfo({data , image}){
    return (
<>
<Header />
<br /><br /><br /><br />
<AssetHero image={image} name={data?.title}/>
<Content content={[data]} image={image}/>
<Questions />
<Footer />
</>
    )
}

export default AssetInfo