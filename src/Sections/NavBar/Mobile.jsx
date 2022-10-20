import './navbar.css';
import NormalText from '../../Components/NormalText';
import { navbarData } from './data';
import { IoSearch} from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";

function Mobile() {
  return (
    <>
        <div className='middle-mobile mobile'>
        <IoSearch size={20} color="#717171"/>
        <div className='second-row'>
            <NormalText text="Where to?" color="#222222" size={14} light={false}/>
            <span className="nav-inner">
            {navbarData.map(({id, value, img})=>{
                return (     
                    <span key={id} className="mob-inner">
                        <NormalText text={value} color="#222222" size={12} light={true} />
                        <sup className='line'>.</sup>
                    </span>
                )
            })}
             </span>
        </div>
        <CiCircleList size={20} color="#717171"/>
        </div>
    </>
  );
}

export default Mobile;
