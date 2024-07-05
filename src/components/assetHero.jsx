function AssetHero({image , name, data}){
    return (
        <div className="hero" style={{backgroundImage: `url(${image})`}}>
        <div className="section1">
<br /><br /><br />
<p>{data?.category}</p>
          <p className={"main up "} style={data?.category?{fontSize:'3rem'}:{}}>
{name}
          </p>
          <p>{data?.date}</p>
          <br /><br />
          <br />
        </div>
        {/* <br /> */}
      </div>
    )
}

export default AssetHero