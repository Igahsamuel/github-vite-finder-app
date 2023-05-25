import { useState, useContext } from 'react'
import GithubContext from '../../context/Github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/Github/GithubActions'

function UserSearch (){
    const [text, setText] = useState('')
    const {users, dispatch} =  useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)
    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(text === ''){
        setAlert('Please fill in something', 'error')
        }else {
            dispatch({type: 'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})
            setText('')
        }
    }

    return (
       <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
         <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                            <input type="text" className="w-full text-black bg-gray-200 input input-lg pr-40" placeholder="Search" 
                            value = {text} onChange = {handleChange} />
                   
                        <button type="submit" className="absolute top-0 right-0 btn btn-lg rounded-l-none w-36">Go</button>
                    </div>
                </div>
            </form>
            </div>
            {users.length > 0 && (
            <div>
            <button className="btn btn-ghost btn-lg " onClick={() => dispatch ({type: 'SET_CLEAR'})}>Clear</button></div>)
            }
       </div>
    )
}

export default UserSearch