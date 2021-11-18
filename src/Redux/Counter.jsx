import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../app/Features/Counter/action";
import './counter.css';

const Counter = () => {
    let {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return(
        <div className="btn-counter">
            <h2>Counter</h2> <br/>
            <button onClick={()=>dispatch(decrementWithCheckingAction(1))}> - </button>
            {' '} <span>{count}</span> {' '}
            <button onClick={()=>dispatch(increment(1))}> + </button>
        </div>
    )
}

export default Counter;