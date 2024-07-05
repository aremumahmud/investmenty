import '../css/new.css'
import img from '../assets/counter-new-bg.jpg'

function New(){
    return (
        <div className="new">
            <div className="content">
                <div className="circle">
                    80 <sup>%</sup>
                </div>
                <div className="text">
                Newest Financing
Options
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default New