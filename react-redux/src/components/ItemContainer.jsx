/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemBox = (props) => {
  return (
    <div>
      <h2>
        Number of {props.itemName} - {props.itemCount}
      </h2>
      <button onClick={props.buyItem}>Buy {props.itemName}</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  const itemName = ownProps.cake ? "Cakes" : "Ice Creams";
  return {
    itemCount: itemState,
    itemName,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(ItemBox);

export default ItemContainer;
