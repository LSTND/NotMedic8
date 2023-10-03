import PropTypes from 'prop-types';
import './button.scss'

const Button = ({text, backgroundColor, onClick, id, className,type}) => {
    return (
     <button  type={type} className={className} style = {{backgroundColor: backgroundColor}} onClick = {onClick} id = {id}>{text}</button>
    )
 
}


Button.defaultProps = {
	backgroundColor: '#ffff'
}

Button.propTypes = {
   text: PropTypes.string,
   backgroundColor: PropTypes.string,
   className: PropTypes.string,
   onClick: PropTypes.func
}


export default Button