import { useDispatch } from "react-redux";
import { addMoney } from "./store";


export default function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(addMoney(500))}>Add Money</button>
    </div>
  )
}
