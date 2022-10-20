import { CiCircleList } from "react-icons/ci";

function Button() {

  return (
    <button type="button"
    style={
      {
        borderColor: '#00000020',
        borderWidth: 1,
        borderRadius:5,
        fontSize:13,
        backgroundColor:"transparent",
        display:"flex",
        flexDirection:"row",
        padding: 10,
        color:"#222222"
      }
    }
    >
    <CiCircleList size={20} color="#717171" style={{marginRight: 10}}/>
    Filters
    </button>
  );
}

export default Button;