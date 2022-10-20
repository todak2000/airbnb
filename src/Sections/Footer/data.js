import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { BiGlobe, BiChevronUp } from "react-icons/bi";

export const footerData = [
    {
        id: 1,
        value: "©  2022 Airbnb Clone, Inc.",
        img: null
    },
    {
        id: 2,
        value: "Privacy",
        img: <GoPrimitiveDot size={7} color="#ccc" style={{marginRight: 5, marginLeft:5}}/>
    },
    {
        id: 3,
        value: "Terms",
        img: <GoPrimitiveDot size={7} color="#ccc" style={{marginRight: 5, marginLeft:5}}/>
    },
    {
        id: 4,
        value: "Sitemap",
        img: <GoPrimitiveDot size={7} color="#ccc" style={{marginRight: 5, marginLeft:5}}/>
    },
    {
        id: 5,
        value: "Destinations",
        img: <GoPrimitiveDot size={7} color="#ccc" style={{marginRight: 5, marginLeft:5}}/>
    },
    {
        id: 6,
        value: "English (US)",
        img: <BiGlobe size={12} color="#222222" style={{marginRight: 3, marginLeft:15}}/>
    },
    {
        id: 7,
        value: "USD",
        img: <BsCurrencyDollar size={12} color="#222222" style={{marginRight: 0, marginLeft:15}}/>
    },
    {
        id: 8,
        value: "Support & Resources",
        img: <BiChevronUp size={20} color="#222222" style={{marginRight: 0, marginLeft:0}}/>
    }
]