/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { useState } from "react";

const NewCakeBox = (props) => {
  const [cakeCount, setCakeCount] = useState(1);

  const handleChange = (e) => {
    if (e.target.value > 0) {
      setCakeCount(e.target.value);
    }
  };

  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <input
        type="number"
        value={cakeCount}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => props.buyCake(cakeCount)}>
        Buy {cakeCount} Cake
      </button>
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
    buyCake: (cakeCount) => dispatch(buyCake(cakeCount)),
  };
};

const NewCakeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeBox);

export default NewCakeContainer;
