import PropTypes from 'prop-types';
import './modal.scss'

const Modal = ({header, text, actions, span, clickOnSpan, color, backgroundColor}) => {
	return (
		<div className='modal-container '>
			<div className='modal'>
				{span &&
					<button
						style={{backgroundColor: backgroundColor}}
						className='modal-close-btn'
						onClick={clickOnSpan}>X
					</button>}

				<div className='modal-text'>
					<h2 style={{color: color}} className='modal-header-text'>{header}</h2>
					<div>{text}</div>
				</div>
				<div className='modal-btn'>{actions}</div>
			</div>
		</div>
	)
}
export default Modal

Modal.defaultProps = {
	text: 'text',
	header: 'header',
	color: '#000',
	backgroundColor: '#ffff',

}

Modal.propTypes = {
	header: PropTypes.string,
	text: PropTypes.string,
	actions: PropTypes.node.isRequired,
	span: PropTypes.bool,
	color: PropTypes.string,
	clickOnSpan: PropTypes.func,
	backgroundColor: PropTypes.string
}
   
   