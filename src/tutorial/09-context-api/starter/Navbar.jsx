import { createContext, useContext, useState } from "react";
import NavLinks from "./Navlinks.jsx";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [name, setName] = useState("fardil");

  const logout = () => {
    setName(null);
  };
  return (
    <NavbarContext.Provider value={{ name, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
