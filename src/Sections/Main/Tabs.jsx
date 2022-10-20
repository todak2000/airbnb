import './main.css';
import NormalText from '../../Components/NormalText';

function Tabs(props) {
    const {
        data,
        activeTab,
        handleTabClick
    } = props
  return (
    <div className="tab-container">
       {data.map(({id, value, img})=>{
        return (
            <div onClick={()=>handleTabClick(value)} key={id} className={activeTab === value ? "tab-child active-tab": "tab-child"}>
                {img}
                <NormalText text={value} color="#222222" size={14} light={activeTab === value ? false : true}/>
            </div>
        )
       })}
       
    </div>
  );
}

export default Tabs;
