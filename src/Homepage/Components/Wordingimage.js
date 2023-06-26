import Animations from "./Animations";
import styles from './Wordingimage.module.css'
const WordingsImage = () => {
    return (
        <div style={{right:'23vw',top:'8vh',position:'relative'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',marginLeft:'8vw',marginTop:'9vh'}}>
            <div style={{color:'white',fontFamily: 'Montserrat',fontWeight:"700",fontSize:"2vw",marginBottom:'-3vh'}}>
                IIT GUWAHATI'S
            </div>
            <div className={styles.alch}>
                ALCHERINGA
            </div>
            <div style={{color:'white',fontSize:"1.5vw",fontFamily:'Montserrat'}}>
                The largest Cultural Fest of
            </div>
            <div style={{color:'white',fontSize:"1.5vw",fontFamily:'Montserrat'}}>
                North-East India
            </div>
            </div>
            <div style={{right:'-56vw',top:'24vh',position:'relative',fontSize:"4vw"}}>
            <Animations></Animations>
            </div>
        </div>
        
      );
}
 
export default WordingsImage;