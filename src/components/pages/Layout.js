import { Outlet, Link } from "react-router-dom"
import Heading from './Heading';
import './style.css';

const Layout = () => {
  return (
    <>
      <Heading />
      <nav>
        
        <ul className="flex">
        
          <li id='one'>
            <Link className='link' to="/"> Product</Link>
          </li>
          <li id='two' >
            <Link className='link' to="/page1">Contact Us</Link>
          </li>
          <li  id='three'>
            <Link className='link' to="/page2">Home</Link>
          </li>
          <li id='four' >
            <Link className='link' to="/page3">About Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;