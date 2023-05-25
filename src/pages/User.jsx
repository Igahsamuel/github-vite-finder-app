import {FaUsers, FaStore, FaUserFriends, FaCodepen} from 'react-icons/fa'
import {useParams} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import GithubContext from "../context/Github/GithubContext"
import { Link } from 'react-router-dom'
import Loading from '../Components/layouts/Loading'
import RepoList from '../Components/repos/RepoList'
import {getUserAndRepos} from '../context/Github/GithubActions'


function User() {
    const {user, loading, repos, dispatch} = useContext(GithubContext)
    const params = useParams()
    useEffect(() => {
        dispatch({type: 'SET_LOADING'})
        const getUserData = async () => {
            const userData = await getUserAndRepos(params.login)
            dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
        }
        getUserData()
    },[dispatch, params.login])
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user
    if(loading){
        return (
            <Loading/>
        )
    }
  return (
    <>
    <div className='w-full mx-auto lg:w-10/11'>
        <div className='mb-4'>
            <Link to = '/' className='btn btn-ghost'>Back To Search</Link>    
        </div> 
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mb-8 md:gap-8'>
            <div className='custom-card-image mb-6 md:mb-0'>
                <div className='rounded-lg shadow-xl card image-full'>
                    <figure>
                        <img src={avatar_url} alt="avatar_url" />
                    </figure>
                    <div className='card-body justify-end'>
                        <div>
                        <h2>{name}</h2>
                        <p>{login}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className='col-span-2'>
                <div className='mb-6'>
                    <h1 className='text-3xl card-title'>{name}
                    <div className='ml-1 mr-2 badge badge-sucess'>{type}</div>
                    {hireable && (
                        <div className='ml-1 mr-2 badge badge-info'>hireable</div>
                    )}
                    </h1>
                    <p>{bio}</p>
                    <div className='mt-4 card-actions'>
                        <a href={html_url} target="_blank" rel='noreferrer' className='btn btn-outline' >VISIT TO PROFILE</a>
                    </div>
                </div>
                <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                   {location && (
                    <div className='stat'>
                        <div className='stat-title text-md'>location</div>
                        <div className='stat-value text-sm'>{location}</div>
                    </div>
                   )}
                   {twitter_username && (
                        <div className='stat'>
                            <div className='stat-title text-md'>Twitter</div>
                            <a href={`https://twitter.com/${user.login}`} target = "_blank" rel='noreferrer' className='stat-value text-sm'>{twitter_username}</a>
                        </div>
                   )}
                   {blog && (
                    <div className='stat'>
                        <div className='stat-title text-md'>Website</div>
                        <a href={`https://${blog}`} target="_blank" rel='noreferrer' className='stat-value text-sm'>{blog}</a>
                    </div>
                   )}
                </div>
            </div>
            </div>
        </div>
        <div className='w-full rounded-lg  shadow-md bg-base-100 py-5 mb-8 stat md:stat lg:stats'>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <FaUsers className='text-3xl md:text-5xl'/>
                </div>
                <div className='stat-title pr-5'>Followers</div>
                <div className='stat-value pr-5 text-3xl md:text-2xl'>{followers}</div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>

                    <FaUserFriends className='text-3xl md:text-5xl'/>
                </div>
                <div className='stat-title pr-5'>Following</div>
                <div className='stat-value pr-5 text-3xl md:text-2xl'>{following}</div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <FaCodepen className='text-3xl md:text-5xl'/>
                </div>
                <div className='stat-title pr-5'>Public Repo</div>
                <div className='stat-value pr-5 text-3xl md:text-2xl'>{public_repos}</div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl'/>
                </div>
                <div className='stat-title pr-5'>Public Gist</div>
                <div className='stat-value pr-5 text-3xl md:text-2xl'>{public_gists}</div>
            </div>
        </div>
        <RepoList repos={repos}/>
    </div>
    </>
  )
}

export default User