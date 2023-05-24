import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const [numOfRestock, setNumOfRestock] = useState(1);
  const iceCreamCount = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();

  const handleRestockClick = () => {
    if (numOfRestock >= 1) {
      dispatch(restocked(numOfRestock));
    }
    setNumOfRestock(1);
  };

  return (
    <div>
      <h2>Number of Icecreams - {iceCreamCount} </h2>
      <button onClick={() => dispatch(ordered())}>Buy Icecream</button>
      <input
        type="number"
        value={numOfRestock}
        onChange={(e) =>
          setNumOfRestock(
            isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
          )
        }
      />
      <button onClick={handleRestockClick}>Restock Icecream</button>
    </div>
  );
};
export default IcecreamView;
