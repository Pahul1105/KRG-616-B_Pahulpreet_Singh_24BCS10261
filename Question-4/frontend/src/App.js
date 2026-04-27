import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/users")
      .then(res => setUsers(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/api/users", {
      name,
      email
    }).then(() => {
      alert("User added!");
      setUsers([...users, { name, email }]);
      setName("");
      setEmail("");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>User List</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;