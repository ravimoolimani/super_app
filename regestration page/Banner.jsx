import styles from   './bgimg.css'
import BackgroundImage from '../../images/page1_bg.png'
const Banner = ()=>{
    return(
        <> 
           
            <div>
                <p className='discover'>Discover new things on<br></br> Superapp</p>
            </div>
            <img src={BackgroundImage}/>
        </>
    )
}

export default Banner