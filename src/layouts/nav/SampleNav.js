import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import LoginNav from './LoginNav';

const SampleNav = () => {

  const todoArr = useSelector(state => state.todo) 

  return ( 
    <div className='flex m-6 p-4 font-extrabold'>
      
      <div className='m-4 text-4xl border-2'>
        <Link to="/">Main</Link>
        <span className='bg-red-500 font-extrabold'>{todoArr.length}</span>
      </div>
      <div  className='m-4 text-4xl border-2'>
        <Link to="/about">About</Link>
      </div>
      <div  className='m-4 text-4xl border-2'>
        <Link to="/products/list">Products</Link>
      </div>
      <div  className='m-4 text-4xl border-2'>
        <Link to="/board/list">Board</Link>
      </div>
      <div>
        <LoginNav></LoginNav>
      </div>

    </div>
  );
}
 
export default SampleNav;