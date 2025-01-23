import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://randomuser.me/api/";

interface User {
  picture: { large: string };
  name: { title: string; first: string; last: string };
  email: string;
  location: { city: string; country: string; postcode: string | number };
  login: { username: string; password: string };
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false); // Flag to trigger fetching

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchData = async () => {
      setError(null); // Reset error before fetching
      try {
        const response = await axios.get(baseURL);
        const fetchedUser = response.data.results?.[0];
        if (fetchedUser) {
          setUser(fetchedUser);
        } else {
          setError("No user data currently."); // Set error if no data
        }
      } catch (err) {
        setError("Failed to fetch user data.");
      } finally {
        setShouldFetch(false); // Reset the flag after fetching
      }
    };

    fetchData();
  }, [shouldFetch]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => setShouldFetch(true)} // Trigger fetching by setting the flag
        style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
      >
        Get Random User
      </button>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        user && (
          <div>
            <img
              src={user.picture.large}
              alt="User"
              style={{ borderRadius: "50%" }}
            />
            <p>
              <strong>Name:</strong> {user.name.title} {user.name.first} {user.name.last}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Location:</strong> {user.location.city}, {user.location.country}
            </p>
            <p>
              <strong>PostCode:</strong> {user.location.postcode}
            </p>
            <p>
              <strong>Username:</strong> {user.login.username}
            </p>
            <p>
              <strong>Password:</strong> {user.login.password}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default App;
