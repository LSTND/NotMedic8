import "./Page404.scss";
import { Link} from 'react-router-dom';
const Page404 = () => {
  return(
    <>
    <div className="page404__wrapper">
    <h2 className="page404__tite">The page you were looking for could not be found.</h2>
    <p className="page404__text1">The requested page was not found. If you enter the URL directly, check that it is spelled correctly. If you followed the link, it's probably out of date.</p>
    <h4 className="page404__text2">What to do?</h4>
    <p className="page404__link"> To return to the main page, follow the link: <Link to='/'>Medik8</Link></p>
    </div>
    </>
  )
}
export default Page404