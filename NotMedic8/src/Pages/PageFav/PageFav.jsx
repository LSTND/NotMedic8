import { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddToBagFavList, actionData } from "../../store/actions"
import "./PageFav.scss";

import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import Card from "../../components/Product/Card/Card";
import useCloseModal from '../../helpers/closeModal'

export const PageFav = () => {
  const dispatch = useDispatch()
  const isModal = useSelector((state) => state.isModalOpen);
  const favoriteStore = useSelector((state) => state.favorite);
  const dataStore = useSelector((state) => state.data);
  const closeModal = useCloseModal();

  const [carrent, setCarrent] = useState({});

  useEffect(() => {
    const favoriteData = JSON.parse(localStorage.getItem("favorite"));
    dispatch(actionData(favoriteData));
  }, [dispatch]);

  const filteredData = dataStore.filter((item) =>
    favoriteStore.some((favorite) => favorite.id === item.id)
  );
  const addToBagFavList = () => {
    dispatch(actionAddToBagFavList(carrent));
    closeModal();
  }
  return (
    <>
      <div className="page-fav__wrapper">
        <h2>Favorites</h2>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              id={item.id}
              poroduct={item}
              handleAddBag={setCarrent}
            />
          ))
        ) : (
          <h3 className="page-fav__title">No products in the favorite</h3>
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
                     addToBagFavList();
                  }
                    
                  }
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
      </div>
    </>
  );
};
export default PageFav;
