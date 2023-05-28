import {FaGithub} from 'react-icons/fa'
// import {BrowserRouter as Router} from 'react-router-dom'
import { Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}){
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content flex ">
            <div className= 'container mx-auto'>
                <div className='flex-none px-2 mx-2'>
            <FaGithub className='inline align-middle text-3xl'/>
            <span className='font-bold px-2 align-middle text-lg'>
                <Link to="/">
            {title}
                </Link>
            </span>
                </div>
                <div className='flex-1 px-2 mx-2'>
                <div className='flex justify-end'>
                    <Link to="/"className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                    <Link to="/about"className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github-App',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar