import '../css/news.css'
import img from '../assets/team-img-01.jpg'
import BlogData from '../data/blog'
import m1 from '../assets/a1.jpg'
import m2 from '../assets/m7.jpg'
import m3 from '../assets/m4.jpg'
import m4 from '../assets/m8.jpg'

let images = [m2,m1,m3 , m4]

function News(){
    return (
<div className="news" id='news'>
    <div className="news_title_little">
        <p>News and Insights</p>
        </div>
        <div className="news_title">
           <p>Featured Stories</p> 
        </div>

        <div className="news_cards">

            {
                BlogData && BlogData.map((data , i)=>{
                    return  <div key={i} className="cards">
                <div className="news_img">
                <a href={'/blogs/article/'+ data.title.split(' ')[0].toLowerCase()+ '/' + data.title.split(' ')[1].toLowerCase() }><img src={images[i]} alt="" /></a>
                </div>
                <div className="news_text">
                   <a href={'/blogs/article/'+ data.title.split(' ')[0].toLowerCase()+ '/' + data.title.split(' ')[1].toLowerCase() }> <p>{data?.title}</p></a>
                </div>
                <a href={'/blogs/article/'+ data.title.split(' ')[0].toLowerCase()+ '/' + data.title.split(' ')[1].toLowerCase() }> <div className="news_footer">
                    <p>{data?.category}</p>
                    <p>{data?.date.replace("By Joseph Mozube -", '')}</p>
                </div></a>
            </div>
                })
            }
           
           
        </div>
</div>
    )
}

export default News