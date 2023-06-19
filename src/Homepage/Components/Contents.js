import styles from './Contents.module.css'
import swan1 from "../Images/Rectangle1.png"
import swan2 from "../Images/Rectangle2.png"
import swan3 from "../Images/Rectangle3.png"
import swan4 from "../Images/Rectangle4.png"
import swan5 from "../Images/Rectangle5.png"
import swan6 from "../Images/Rectangle6.png"
import swan7 from "../Images/Rectangle7.png"
const Contents = () => {
    return ( 
        <div style={{paddingLeft:'2vw'}}>
            <div className={styles.heading}>About Us</div>
            <div className={styles.body}>
                <span style={{width:"95vw",display:"flex",flexWrap:"wrap",marginBottom:"2vw",fontSize:"1.2vw"}}>
                Alcheringa is the annual cultural festival of the Indian Institute of Technology (IIT), Guwahati. Started in 1996 by a group of students, Alcheringa, IIT Guwahati has become one of Asia’s most significant college-level cultural events. Spread over three days and four nights, Alcheringa attracts people from all over the world with its spectacular events and competitions.

                </span>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginBottom:"2vw"}}>
                <div style={{paddingBottom:'1vw'}}>
            <a href="#" className={styles.button1}>Competitions</a>
            </div>
            <div>
            <a href="#" className={styles.button2}>Meet the Team</a>
            </div>
            </div>
            <div className={styles.heading}>Featured Events</div>
            <div style={{display:'flex',flexWrap:"wrap",marginBottom:"1vw",alignItems:"center",overflowX:"hidden"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                <img src={swan5} style={{width:'35vw',height:'20vw',marginBottom:'0.2vw'}} alt="" />
                <img src={swan2} style={{width:'35vw',height:'20vw',marginBottom:'0.2vw'}} alt="" />
                </div>
                <div style={{display:"flex",flexDirection:"column",marginLeft:"1vw",marginRight:"1vw"}}>
                <img src={swan6} style={{width:'20vw',height:'40vw'}} alt="" />
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                <img src={swan7} style={{width:'25vw',height:'20vw',marginBottom:'0.2vw'}} alt="" />
                <img src={swan1} style={{width:'25vw',height:'20vw',marginBottom:'0.2vw'}} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Contents;