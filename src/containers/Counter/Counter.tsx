import {useDispatch, useSelector} from "react-redux";
import {decrease, increase, increaseByNumber} from "./counterSlice.ts";
import {RootState} from "../../app/store.ts";


const Counter = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            {counterValue}
            <hr/>
            <button onClick={() => dispatch(increase())}>Increase + 1</button>
            <button onClick={() => dispatch(increaseByNumber(5))}>Increase + 5</button>
            <button onClick={() => dispatch(decrease())}>Decrease - 1</button>

        </div>
    );
};

export default Counter;