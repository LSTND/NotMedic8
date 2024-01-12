import { actionCloseModal } from "../store/actions";
import { useDispatch} from "react-redux";


const useCloseModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actionCloseModal());
  };

  return closeModal;
};

  export default useCloseModal