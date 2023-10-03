import {useSelector} from "react-redux";
import { ProductViewModeProvider } from './ProductContext/ProductContext';
import AppRoutes from "./routes";
import Header from "./components/Header/index.js";
import "./App.css";

const App = () => {

	const bagStore = useSelector((state) => state.bag);
	const favoriteStore = useSelector((state) => state.favorite);

	return (
		<>
			<Header countBag={bagStore.length} countFav={favoriteStore.length} />
			  <ProductViewModeProvider>
			<main>
				<AppRoutes/>
				</main>
				</ProductViewModeProvider>
		</>
	);
};

export default App;
