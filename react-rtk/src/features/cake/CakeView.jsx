import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const [numOfRestock, setNumOfRestock] = useState(1);
  const cakeCount = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const handleRestockClick = () => {
    if (numOfRestock >= 1) {
      dispatch(restocked(numOfRestock));
    }
    setNumOfRestock(1);
  };

  return (
    <div>
      <h2>Number of Cakes - {cakeCount}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Cake</button>
      <input
        type="number"
        value={numOfRestock}
        onChange={(e) =>
          setNumOfRestock(
            isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
          )
        }
      />
      <button onClick={handleRestockClick}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
