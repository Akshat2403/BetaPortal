import styles from './Header.module.css'
import logo from '../../Homepage/Images/Frame.png'
import dibgd from '../Images/diamondbgd.png';
import { useRef } from 'react'
const Header = () => {
    const ref=useRef(null);
    const handleclick=()=>{
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return ( 
        <div>
            
            {/* <div className={styles.navbar}>
                <div className={styles.leftsidenav}>
                    <img className={styles.imgdeco} src={logo} alt="" />
                   <a className={styles.alcherhead} style={{fontFamily: 'Montserrat', color:'white',textDecoration: 'none'}} href="#">ALCHERINGA</a>

                </div>
                <div className={styles.rightsidenav}>
                    <a className={styles.individual} style={{color:'white',textDecoration: 'none'}} href="/">Home</a>
                    <a className={styles.individual} style={{color:'white',textDecoration: 'none'}} href="/events/">Events</a>
                    <a className={styles.individual} style={{color:'white',textDecoration: 'none',textDecoration:'underline',textDecorationColor:'white',textDecorationThickness:'0.2vw'}} href="/initiatives/">Initiatives</a>
                    <a className={styles.individual} style={{color:'white',textDecoration: 'none'}} href="/teams/">Team</a>
                    <a className={styles.individual} style={{color:'white',textDecoration: 'none'}} href="/competitions/">Competitions</a>
                </div>
            </div> */}
            <div className={styles.headmain}>
                <div className={styles.words}>
                    <p className={styles.headings}>THE INITIATIVES</p>
                    <p className={styles.content}>
                    Alcheringa hosts several campaigns under Initiatives for cultural development and the betterment of society. These campaigns are conducted round the year to serve the mankind.
                    </p>
                </div>
                <div style={{overflow:'hidden',height:'20vw',zIndex:'-1',marginTop:'2vw'}}>
                <img className={styles.imgdes} style={{height:'20vw',marginBottom:'0vw'}} src={dibgd} alt="" />
                </div>
                <a onClick={handleclick} ><span className={styles.downarrow}></span></a>
                </div>
                <div ref={ref} style={{height:'0vw',width:'0vw'}}></div>
      {/* <Middlepart ref={middlePartRef} /> */}
    </div>
            
     );
}
 
export default Header;