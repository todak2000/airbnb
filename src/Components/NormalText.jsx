
function NormalText(props) {
    const {text, color, size, light} = props;
  return (
    <p style={{
        color: color, 
        fontFamily:light ? "FontLight":"Font",
        fontSize: size,
    }}
    >
    {text}</p>
  );
}

export default NormalText;