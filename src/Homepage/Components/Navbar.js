import alcherlogo from '../Images/Frame.png'
import styles from './Navbar.module.css'
const Navbar = () => {
    return ( 
        <div className={styles.mainnavclass}>
           
            <div className={styles.leftside}>
                <img src={alcherlogo} style={{width:'2vw',height:'2vw'}} alt="" />
                <a className='addfont' style={{fontFamily: 'Montserrat', color:'white', textDecoration:'none',paddingLeft:'1vw'}}>ALCHERINGA</a>
            </div>
            <div className={styles.rightside}>
                <a className={styles.individual} style={{fontFamily: 'Montserrat', color:'white'}}>Home</a>
                <a className={styles.individual} style={{fontFamily: 'Montserrat', color:'white',textDecoration:'none'}}>Events</a>
                <a className={styles.individual} style={{fontFamily: 'Montserrat', color:'white',textDecoration:'none'}}>Initiatives</a>
                <a className={styles.individual} style={{fontFamily: 'Montserrat', color:'white',textDecoration:'none'}}>Team</a>
                <a className={styles.individual} style={{fontFamily: 'Montserrat', color:'white',textDecoration:'none'}}>Competitions</a>
            </div>
        </div>
     );
}
 
export default Navbar;