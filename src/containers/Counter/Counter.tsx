import {useDispatch, useSelector} from "react-redux";
import {increaseByNumber, check, changeColor, remove, resetInput} from "./counterSlice.ts";
import {RootState} from "../../app/store.ts";


const Counter = () => {
    const value = useSelector((state: RootState) => state.counter.value);
    const status = useSelector((state: RootState) => state.counter.status);
    // const info = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const clickOnBtn = (key: string) => {
        if (key === 'E') {
            dispatch(check());
            dispatch(changeColor());
            dispatch(resetInput());
        }
    };


    return (
        <div className="container">
            <div className={`${status}`}>
                {Array.from({length: 4}).map((_, index) => (
                    <span key={index}>
                        {value[index] ? '*' : ''}
                    </span>
                ))}
            </div>
            <hr/>
            <div className="calculator">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9',].map((key) => (
                    <button key={key} onClick={() => dispatch(increaseByNumber(Number(key)))}>{key}</button>
                ))}
                <button onClick={() => dispatch(remove())}>{'<'}</button>
                <button onClick={() => dispatch(increaseByNumber(0))}>{'0'}</button>
                <button onClick={() => clickOnBtn('E')}>E</button>
            </div>


        </div>
    );
};

export default Counter;