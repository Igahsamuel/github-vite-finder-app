import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Notfound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-wg-lg">
                <div className="font-bold text-8xl mb-3">
                    opps!
                </div>
                <p className="my-3 text-5xl">404 Page not Found!!</p>
                <Link to="/" className='btn btn-primary'>
                    <FaHome className='inline text-2xl mr-2'/>
                    <p>Go back home</p>
                </Link>
            </div>   
        </div>
    </div>
  )
}

export default Notfound