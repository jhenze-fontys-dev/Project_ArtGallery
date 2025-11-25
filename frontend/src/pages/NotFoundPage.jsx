import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className=' text-yellow-400 text-6xl mb-4'/>
      
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
       <img
  src="/404Error.png"
  alt="Niks gevonden helaas"
  style={{ width: "100%", maxWidth: "300px", display: "block", margin: "0 auto" }}
/>
      <p className="text-xl mb-5">This page does not exist</p>
     
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage