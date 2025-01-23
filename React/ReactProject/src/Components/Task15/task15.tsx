import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://randomuser.me/api/0.8/?results=10";

// Interface for user data
interface User {
  picture: { large: string };
  name: { title: string; first: string; last: string };
  email: string;
  location: {
    city: string;
    state: string;
    street: string;
    zip: string | number;
  };
  phone: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]); 
  const [error, setError] = useState<string | null>(null); 
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 


  // Initial data fetch
  useEffect(() => {
    if (!shouldFetch) return;
    const fetchUsers = async () => {
      setError(null); 
      setIsLoading(true); 
  
      try {
        const response = await axios.get(baseURL); 
        const fetchedUsers = response.data.results.map( (result: {user: User }) => result.user);
        if (fetchedUsers) {
          setUsers(fetchedUsers); // Set fetched users
        } else {
          setError("No user data currently available."); 
        }
      } catch {
        setError("Failed to fetch users data."); 
      } finally {
        setIsLoading(false);
        setShouldFetch(false);
      }
    };
    fetchUsers();

  }, [shouldFetch]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => setShouldFetch(true)}
        style={{ padding: "10px 20px", fontSize: "16px" }}
        disabled={isLoading} 
      >
        {isLoading ? "Loading..." : "Get Users"}
      </button>
      {error ? (
        <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
      ) : users && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                margin: "10px",
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
                textAlign: "start",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.11)",
              }}
            >
              <img
                src={user.picture.large}
                alt="User"
                style={{
                  borderRadius: "50%",
                  marginBottom: "10px",
                  marginLeft: "85px",
                }}
              />
              <p>
                <strong>Name:</strong> {user.name.title} {user.name.first}{" "}
                {user.name.last}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Location:</strong> {user.location.city},{" "}
                {user.location.state}, {user.location.street}
              </p>
              <p>
                <strong>PostCode:</strong> {user.location.zip}
              </p>
              <p>
                <strong>PhoneNumber:</strong> {user.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
