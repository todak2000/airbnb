import './navbar.css';
import NormalText from '../../Components/NormalText';
import { navbarData } from './data';
import { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

function Desktop() {
  return (
    <>
        <div className='row-space'>
            <FaAirbnb size={40} color="#ff385c" className='desktop'/> 
            <span className='airbnb'>airbnb</span>
        </div>
        <div className='row-flexy middle desktop'>
            {navbarData.map(({id, value, img})=>{
                return (
                    <span key={id} className="row-flexy nav-inner">
                    <NormalText text={value} color="#222222" size={14} light={img!== null ? true : false}/>
                    {img !== null ? img: <span className='line'>|</span>}
                    </span>
                )
            })}
        </div>
        <div className='row-flexy desktop'>
            <NormalText text="Become a Host" color="#222222" size={14}/>
            <BiGlobe size={20} color="#929eaa" style={{marginLeft:15}}/>
            <BsPersonCircle size={30} color="#929eaa" style={{marginLeft:15}}/>
        </div>   
    </>
  );
}

export default Desktop;
