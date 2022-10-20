
function NoMarginText(props) {
    const {text, color, size, light} = props;
  return (
    <p style={{
        color: color, 
        fontFamily:light ? "FontLight":"Font",
        fontSize: size,
        margin: 0,
    }}
    >
    {text}</p>
  );
}

export default NoMarginText;