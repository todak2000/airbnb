import './component.css'
import NoMarginText from './NoMarginText';
import NormalText from './NormalText';
import { AiFillStar } from "react-icons/ai";
import { BsHeartFill, BsHeart } from "react-icons/bs";

function Card({data,handleLike}) {
    const {
      id,
      location,
      img,
      host,
      date,
      amount,
      rating,
      like
    } = data;
    let value = `Hosted by ${host}`
    let amountPerNight = `$${amount}/night`
  return (
    <div className='card' key={id}>
      {like ? 
        <BsHeartFill  className='heart' size={23} color="#f00" onClick={()=>handleLike(id)}/>: 
        <BsHeart  className='heart' size={23} color="#fff" onClick={()=>handleLike(id)}/>}
        <img src={img} alt="home" className='img'/>
        <div className='row-apart'>
          <NoMarginText text={location} color="#222222" size={15} light={false} />
          <div className='row-space'>
            <AiFillStar  style={{marginRight:5}}/>
            <NoMarginText text={rating} color="#222222" size={15} light={true} />
          </div>
        </div>
        <NoMarginText text={value} color="#222222" size={15} light={true} />
        <NoMarginText text={date} color="#222222" size={15} light={true} />
        <NormalText text={amountPerNight} color="#222222" size={15} light={false} />
    </div>
  );
}

export default Card;