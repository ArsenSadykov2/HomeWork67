import {useDispatch, useSelector} from "react-redux";
import {increaseByNumber, check, removeChar, resetInput} from "./counterSlice.ts";
import {RootState} from "../../app/store.ts";


const Counter = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            {counterValue}
            <hr/>
            <button onClick={() => dispatch(removeChar())}><strong>{'<'}</strong></button>
            <button onClick={() => dispatch(increaseByNumber(5))}>Increase + 5</button>
            <button onClick={() => dispatch(check(), resetInput())}>E</button>

        </div>
    );
};

export default Counter;