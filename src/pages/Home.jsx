import UsersResult from "../Components/users/UsersResult"
import UserSearch from "../Components/users/UserSearch"
function Home(){
    return(
        <div>
                <UserSearch/>
                <UsersResult/>
        </div>
    )
}

export default Home