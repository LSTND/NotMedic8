import {useContext } from 'react'
import { useSelector } from "react-redux";
import { ProductViewModeContext } from '../../../ProductContext/ProductContext'
import "./CardList.scss";
import Card from "../Card";

const CardList = ({handleAddBag}) => {
    const dataStore = useSelector((state) => state.data);
 const { viewMode } = useContext(ProductViewModeContext)
    const cards = dataStore.map((item) => (
        <Card
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            id={item.id}
            poroduct={item}
            appointment={item.appointment}
            handleAddBag={handleAddBag}
        />
    ))

     return (
    <>
      {viewMode === 'cards' ? (
        <div className="wrapper">{cards}</div>
      ) : (
        <div className="wrapper__list">{cards}</div>
      )}
    </>
  )

  }

export default CardList
