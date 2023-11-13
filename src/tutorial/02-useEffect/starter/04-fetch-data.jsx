import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  };

  useEffect(() => {
    try {
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
