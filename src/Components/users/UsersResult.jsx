import { useContext } from "react"
import Loading from "../layouts/Loading"
import UserItem from "./userItem"
import GithubContext from "../../context/Github/GithubContext"


function UsersResult() {
    const {users, loading} = useContext(GithubContext)    
    
    if(!loading){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <UserItem key={user.id} user = {user}/>
                ))}
            </div>
              )
    }else{
        return(
            <Loading/>
        )
    }
}

export default UsersResult