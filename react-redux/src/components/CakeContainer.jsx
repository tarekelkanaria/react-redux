/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeBox = (props) => {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

const CakeContainer = connect(mapStateToProps, mapDispatchToProps)(CakeBox);

export default CakeContainer;
