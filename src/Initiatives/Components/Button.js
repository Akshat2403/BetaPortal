import styles from './Button.module.css'
const Button = (props) => {
    const {children,backgroundColor, width} =props
    const passedstyles={backgroundColor,width}
    return ( 
        <div>
            <div className={styles.stybutton} style={passedstyles}>{children}</div>
        </div>
     );
}
 
export default Button;