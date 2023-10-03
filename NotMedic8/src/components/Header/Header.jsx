import {useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {ReactComponent as Bag} from "./img/bag.svg";
import {ReactComponent as Love} from "./img/favorite.svg";
import "./Header.scss";

const Header = () => {
	const favoriteStore = useSelector((state) => state.favorite);
	const bagStore = useSelector((state) => state.bag);
	return (
		<header className="header">
			<div className="container">
				<div className="logo">
					<Link to='/' className="header__logo">
						Medik8
					</Link></div>
				<div className="header__actions">
					<Link to='/bagList' className="header__bag-list">
              <span className="icon-bag">
                <span className=" count count__bag">{bagStore.length}</span>
                <Bag/>
              </span>
					</Link>
					<Link to="/favourites" className="header__favorites-list">
              <span className="icon-favorite">
                <span className="count count__fav">{favoriteStore.length}</span>
                <Love/>
              </span>
					</Link>
				</div>
			</div>
		</header>
	);
}
export default Header

Header.propTypes = {
	countBag: PropTypes.number,
	countFav: PropTypes.number
}

