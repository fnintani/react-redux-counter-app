import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, decrementWithCheckingAction } from "../app/features/counter/actions.js";

function Redux() {

	let {count} = useSelector(state => state.counter);
	const dispatch = useDispatch();

 	return (
    	<div>
      	  <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
	      <span>{count}</span>
	      <button onClick={() => dispatch(increment(1))}>+</button>
	   {/*   <button onClick={() => dispatch({type: 'DEC', value: 1})}>-</button>
	      <span>{count}</span>
	      <button onClick={() => dispatch({type: 'INC', value: 1})}>+</button>*/}
   		</div>
  	);
}

export default Redux;