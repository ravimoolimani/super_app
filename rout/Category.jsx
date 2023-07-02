import styles from './Category.module.css'
import action from '../../images/action.png'
import drama from '../../images/drama.png'
import fantasy from '../../images/fantasy.png'
import fiction from '../../images/fiction.png'
import horror from '../../images/horror.png'
import music from '../../images/music.png'
import romance from '../../images/romance.png'
import thriller from '../../images/thriller.png'
import western from '../../images/western.png'
import Chips from '../Global/Chips'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const genres = [
    {
        id:"Action",
        color:"#FF5209",
        image:<img style={{width:"160px", height:"120px"}}  src={action}/>
    },
    {
        id:"Drama",
        color:"#D7A4FF",
        image:<img style={{width:"160px", height:"120px"}}  src={drama}/>
    },
    {
        id:"Romance",
        color:"#11B800",
        image:<img style={{width:"160px", height:"120px"}}  src={romance}/>
    },
    {
        id:"Thriller",
        color:"#84C2FF",
        image:<img style={{width:"160px", height:"120px"}}  src={thriller}/>
    },
    {
        id:"Western",
        color:"#912500",
        image:<img style={{width:"160px", height:"120px"}}  src={western}/>
    },
    {
        id:"Horror",
        color:"#7358FF",
        image:<img style={{width:"160px", height:"120px"}}  src={horror}/>
    },
    {
        id:"Fantasy",
        color:" #FF4ADE",
        image:<img style={{width:"160px", height:"120px"}}  src={fantasy}/>
    },
    {
        id:"Music",
        color:"#E61E32",
        image:<img style={{width:"160px", height:"120px"}}  src={music}/>
    },
    {
        id:"Fiction",
        color:"#6CD061",
        image:<img style={{width:"160px", height:"120px"}}  src={fiction}/>
    }

]
const Category = ()=>{
    const [categories, setCategories] = useState([])
    const [lengthError, setLengthError] = useState(false)
    const navigate = useNavigate()
    const handleSignUp = ()=>{
        if(categories.length<3){
            setLengthError(true)
            return
        }else{
            setLengthError(false)
            window.localStorage.setItem("genres", JSON.stringify([...categories]))
            navigate("/browse")
        }
    }
    return (
        <div className={styles.hero}>
            <div className={styles.section1}>
                <p className={styles.title}>Super app</p>
                <p className={styles.subtitle}>Choose your<br></br> entertainment<br></br>category</p>
                <div style={{marginTop:"10vh"}}>
                <Chips categories={categories} color={"green"}  setCategories={setCategories}/>
                {lengthError?<p className={styles.error}>Minimum 3 category required</p>:<></>}
                </div>
            </div>
            <div className={styles.section2}>
                {genres.map((data,idx)=>
                    <Block data={data} idx={idx} categories={categories}  setCategories={setCategories}/>
                )}
            </div>
            <button className={styles.Nextpage} onClick={handleSignUp}>Next Page</button>
        </div>
    )
}


const Block = ({data,idx, setCategories, categories})=>{
    const [selected, setSelected] = useState()
    const handleClick = (e)=>{
        if(categories.includes(data.id)){
            const index = categories.indexOf(data.id)
            categories.splice(index,1)
            setCategories([...categories])
        }
        else{
            setCategories([...categories,data.id])
        }
        setSelected(!selected)
    }
    useEffect(()=>{
        setSelected(categories.includes(data.id)==true)
    })
    return (
        <div data={data}  onClick={(e)=>handleClick(e)}  key={idx} style={{background:data['color'],color:"white",padding:"16px",borderRadius:"12px",border:`${selected?"4px solid green":"4px solid white"}`}}>
            <p style={{marginBottom:"4px",fontSize:"18px"}}>{data.id}</p>
            {data.image}
        </div>
    )
}
export default Category