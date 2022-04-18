import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.reducer.count);
    const dispatch = useDispatch()

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>inc</button>
                <button onClick={() => dispatch(decrement())}>dec</button>
            </div>
        </section>
    )
}

export default Counter