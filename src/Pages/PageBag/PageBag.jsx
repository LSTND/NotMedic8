import { useDispatch, useSelector } from "react-redux";
import { actionDeleteBag,actionData} from "../../store/actions";
import { useState,useEffect} from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import Card from "../../components/Product/Card/Card";
// import Form from '../../components/Form/Form'
import "./PageBag.scss";
import useCloseModal from '../../helpers/closeModal'
import { useNavigate } from "react-router-dom";

export const PageBag = () => {
  const bag = useSelector((state) => state.bag);
  const isModal = useSelector((state) => state.isModalOpen);
  const dataStore = useSelector((state) => state.data);
  const closeModal = useCloseModal();
  const [carrent, setCarrent] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    const bagData = JSON.parse(localStorage.getItem("bag"));
    dispatch(actionData(bagData)); 
  }, [dispatch]);
  
  const filteredDataBag = dataStore.filter((item) =>
     bag.some((bag) => bag.id === item.id)
  );
  	 
  const deleteBag = (id) => {
    dispatch(actionDeleteBag(id));
    closeModal();
  };
  return (
    <>
      <div className="page-bag__wrapper">
       
         <h2>Bag List</h2> 
        {filteredDataBag.length > 0 ? (
          filteredDataBag.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              id={item.id}
              poroduct={item}
            
              hideDeletbtn={true}
              hideFavBtn={true}
              hideAddBtn={true}
              handleAddBag={setCarrent}
            />
          ))
        ) : (
          <h3 className="page-bag__title">No products in the bag</h3>
        )}
        {isModal && (
          <Modal
            color={"#000"}
            header={"Are you sure, you want to delete cart?"}
            text={"Accept?"}
            backgroundColor={"#ffff"}
            span
            clickOnSpan={closeModal}
            actions={
              <>
                <Button
                  text={"Ok"}
                  backgroundColor={"#ffff"}
                  onClick={() => deleteBag(carrent)}
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
{filteredDataBag.length > 0 && (
  <Button
    text={"Buy Now"}
    backgroundColor={"#ffff"}
    onClick={() => navigate("/delivery")}
    className="btn-ok"
  />
)}
      </div>
    </>
  );
};
export default PageBag;
