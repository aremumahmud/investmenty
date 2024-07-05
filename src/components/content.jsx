
import '../css/content.css'

function Content({content , image, index}){
    return (
        <>
        {
            content.map((data , i) => (
                 <div key={i} className={"content_w " + ((index || i)%2 === 0?'rev':'')}>
                    {
                        image && <img src={image} alt="" />
                    }
                   
<div className='full-wit'>
     <p className="content_title">{data?.title}</p>
            <div className="content_content">{data?.content}</div>
</div>
           
        </div>
            ))
        }
        
        </>
       
    )
}


export default Content