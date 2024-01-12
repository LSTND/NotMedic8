import { useState, useEffect,useContext  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {actionFetchData,actionDeleteBag,actionAddBag,} from "../../store/actions";
import { ProductViewModeContext } from '../../ProductContext/ProductContext'

import CardList from "../../components/Product/CardList/CardList";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import useCloseModal from "../../helpers/closeModal";

const PageHome = () => {
  const { viewMode, toggleViewMode } = useContext(ProductViewModeContext)
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.isModalOpen);
  const bagStore = useSelector((state) => state.bag);

  const [carrent, setCarrent] = useState({});
  const closeModal = useCloseModal();

  useEffect(() => {
    dispatch(actionFetchData());
  }, []);

  const isBagStore = bagStore.some((item) => item.id === carrent.id);
  const bagFromStorage = JSON.parse(localStorage.getItem("bag")) || [];
	
  const addBag = () => {
    if (isBagStore) {
      dispatch(actionDeleteBag(carrent));
      const newBag = bagStore.filter((item) => item.id !== carrent.id);
      localStorage.setItem("bag", JSON.stringify(newBag));
    } else {
      dispatch(actionAddBag(carrent));
      const updatedBag = [...bagFromStorage, carrent];
      localStorage.setItem("bag", JSON.stringify(updatedBag));
    }
    closeModal();
  };

  return (
    <>
      <Button
        text={"Cards / List"}
        onClick={toggleViewMode}
        backgroundColor={"#ffff"}
        className="btn-ok  btn-context" />
        {viewMode === 'cards' ? (
             <CardList handleAddBag={setCarrent} />
          ) : (
          <CardList handleAddBag={setCarrent}/>
          )}
      {isModal && (
        <Modal
          color={"#000"}
          header={"Are you sure, you want to add to cart?"}
          text={"Accept"}
          backgroundColor={"#ffff"}
          span
          clickOnSpan={closeModal}
          actions={
            <>
              <Button
                text={"Ok"}
                backgroundColor={"#ffff"}
                onClick={() => {
                  addBag();
                  closeModal();
                }}
                className="btn-ok"
              />
              <Button
                text={"Cancel"}
                backgroundColor={"#000"}
                onClick={closeModal}
                className="btn-ok btn-cancle"
              />
            </>
          }
        />
      )}
    </>
  );
};

export default PageHome;
