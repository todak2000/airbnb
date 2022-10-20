import './footer.css';
import FooterCard from '../../Components/FooterCard';
import { footerData } from './data';

function Footer() {
  return (
    <div className="footer-container">
        <FooterCard data={footerData} n={5} left={true} />
        <FooterCard data={footerData} n={5} left={false} />
    </div>
  );
}

export default Footer;
