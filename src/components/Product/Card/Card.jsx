import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {actionAddToFavorite, actionRemoveFavorite,actionHandleModal} from "../../../store/actions";
import Button from "../../Button/Button";
import "./Card.scss";

const Card = ({ img, name, price, id, poroduct, hideDeletbtn, hideFavBtn, hideAddBtn, appointment, handleAddBag }) => {
	const favoriteStore = useSelector((state) => state.favorite);
	const dispatch = useDispatch()
	const isFavoriteStore = favoriteStore.some((item) => item.id === poroduct.id)

	const addFavorite = () => {
		if (isFavoriteStore){
			dispatch(actionRemoveFavorite(poroduct))
			
			const newFavorites = favoriteStore.filter(item => item.id !== poroduct.id)
			localStorage.setItem('favorite', JSON.stringify(newFavorites))
		} else {
			dispatch(actionAddToFavorite(poroduct))
			localStorage.setItem('favorite', JSON.stringify([...favoriteStore, poroduct]))
		}
	}
	 
  const handleModal = () => {
	  dispatch(actionHandleModal());
	  handleAddBag(poroduct)
  };

	return (
		<div className="card__container" id={id}>
			<img src={img} alt="" className="card__img"/>
			{hideDeletbtn && (
				<div className='card__delete-btn'
				     onClick={handleModal}>
					<span>x</span>
				</div>
			)}
			{!hideFavBtn && (
				<div
					className={`card__favorites-list ${!isFavoriteStore ? "favorite" : ""}`}
					onClick={() => {
						addFavorite()
					}}
					style={{color: isFavoriteStore ? "black" : "grey"}}
				>
					<svg width="25px" height="25px" viewBox="0 0 192 192" onClick={() => {
					}}>
						<path
							d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z"/>
					</svg>
				</div>)}

			<div className="product">
				<h3 className="product__name">{name}</h3>
				<p className="product_appointment">{appointment}</p>
				<p className="product__price">{price}</p>
				{!hideAddBtn && (
					<Button
						text="Add to card"
						onClick={handleModal}
						backgroundColor="#ffff"
						className="product__btn"
					/>)}

			</div>
		</div>
	);
}
export default Card

Card.defaultProps = {
	name: "name",
	appointment: "appointment",
	price: "price",
};

Card.propTypes = {
	handleModal: PropTypes.func,
	addFavorite: PropTypes.func,
	img: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	appointment: PropTypes.string,
	price: PropTypes.string,
};
