import { useAppContext } from "./Navbar.jsx";

const UserContainer = () => {
  const { name, logout } = useAppContext();
  return (
    <div className="user-container">
      {name ? (
        <>
          <p>Hello, {name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};
export default UserContainer;
