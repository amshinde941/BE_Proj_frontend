import NavIcon from "../../Images/NavIcon.svg";
import { ReactComponent as CrossIcon } from "../../Images/CrossIcon.svg";

const MenuIcon = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div
      onClick={() => {
        setMobileMenu(!mobileMenu);
      }}
      className="lg:hidden"
    >
      {mobileMenu ? (
        <CrossIcon className=" cursor-pointer " />
      ) : (
        <img src={NavIcon} alt="nav" className="w-5 cursor-pointer" />
      )}
    </div>
  );
};

export default MenuIcon;
