import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { login, logout } from './logedSlice'

const Loged = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch()

    return (
        <section>
            <p>{user}</p>
            <div>
                <button onClick={() => dispatch(login({ name:"Alfred", pass:"rumburak" }))}>Login rumburak</button>
                <button onClick={() => dispatch(logout())}>logout</button>
            </div>
        </section>
    )
}

export default Loged