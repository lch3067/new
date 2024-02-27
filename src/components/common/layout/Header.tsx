import "./Header.css";
import evolveLogo from "../../../assets/evolvesoft_logo.png";

function Header() {
  return (
    <header id="header">
      <h2>Header 영역</h2>
      <img src={evolveLogo} alt="Company Logo" />
    </header>
  );
}

export default Header;
