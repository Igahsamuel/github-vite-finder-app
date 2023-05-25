import spinner from './assets/gif 3.gif'

function Loading() {
  return (
    <div className='w-100 mt-20'>
        <img width = {180} src={spinner} alt="Loading" className='text-center mx-auto'/>
    </div>
  )
}

export default Loading