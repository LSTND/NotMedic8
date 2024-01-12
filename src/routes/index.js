import {Route, Routes} from "react-router-dom";
import PageFav from "../Pages/PageFav/PageFav";
import PageBag from "../Pages/PageBag/PageBag";
import PageHome from "../Pages/PageHome/PageHome";
import Page404 from "../Pages/Page404/Page404";
import PageDelivery from "../Pages/PageDelivery/PageDelivery";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={"/"} element={<PageHome />}/>
			<Route path={"/favourites"} element={<PageFav/>}/>
			<Route path={"/bagList"} element={<PageBag />} />
			<Route path={"/delivery"} element={<PageDelivery/>}/>
			<Route path={"*"} element={<Page404/>}/>
		</Routes>
	);
};
export default AppRoutes;
