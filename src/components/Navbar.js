import styles from './css/nav.module.css'
import logo from './images/Frame.png'
const Navbar = () => {
    return ( 
    <div>
        <div className={styles.navbar}>
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
            </div>
    </div> );
}
 
export default Navbar;