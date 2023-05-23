import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const HooksIceCreamContainer = () => {
  const iceCreamsNumber = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {iceCreamsNumber}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
};

export default HooksIceCreamContainer;
