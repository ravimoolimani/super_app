import Profile from '../components/Browse/Profile'
import Weather_report from '../components/Browse/Weather_report'
import Note from '../components/Browse/Note'
import News from '../components/Browse/News'
import Time from '../components/Browse/Time'
import { useNavigate } from 'react-router-dom'
const Browse = ()=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/movies')
    }
    return (
        <div style={{height:"100vh",width:"100vw",background:"black",paddingLeft:"3vw",paddingTop:"3vh",boxSizing:"border-box"}}>
        <div style={{display:"flex",gap:"20px"}}>
        <div>
        <Profile/>
        <Weather_report/>
        <Time/>
        </div>
        <div>
            <Note/>
        </div>
        <div>
            <News/>
        </div>
        </div>
        <button  style={{position:"absolute",bottom:"2vh",fontFamily:'DM Sans',right:"3vw",background:"#148A08",border:"none",color:"white",padding:"6px",borderRadius:"12px"}} onClick={handleClick}>Browse</button> 
        </div>
    )
}

export default Browse