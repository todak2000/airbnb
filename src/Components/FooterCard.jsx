import './component.css'
import NormalText from './NormalText';


function FooterCard(props) {
    const {data, n, left} = props
  return (
    <div className='row-apart footer-card' >
        {left ? 
        data.filter(item =>item.id <= n).map(({id, value, img})=>{
          return(
            <div className='row-space' key={id}>
              {img && img}
              <NormalText text={value} color="#222222" size={12} light={true} />
            </div>
          )
        })
        :
        data.filter(item =>item.id > n).map(({id, value, img})=>{
          return(
            <div className='row-space' key={id}>
              {img && id !== data.length ? 
              <>{img} <NormalText text={value} color="#222222" size={12} light={false} /></>
              :
              <> <span style={{marginLeft:15}}></span><NormalText text={value} color="#222222" size={12} light={false} /> {img}</>
            }
            </div>
          )
        })
        }
    </div>
  );
}

export default FooterCard;
