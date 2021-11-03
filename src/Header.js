import Logo from "./images/3DLogo.png";

function Header() {
  return (
    <div className="Header">
      <img src={Logo} className="headerLogo" alt="logo" />
    </div>
  );
}

export default Header;
