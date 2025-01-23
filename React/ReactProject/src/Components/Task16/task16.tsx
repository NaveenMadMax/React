import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./task16.css"

const baseURL = "https://randomuser.me/api/";

interface User {
    picture: { large: string };
    name: { title: string; first: string; last: string };
    email: string;
    phone: number;
    location: {
      city: string;
      street: { name: string; number: number };
    };
    login: { password: string };
    dob: { date: string; age: number };
  }

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false); // Flag to trigger fetching
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchData = async () => {
      setError(null); // Reset error before fetching
      setIsLoading (true);
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
        setIsLoading (false);
      }
    };

    fetchData();
  }, [shouldFetch]);
  

  return (
    <div className="maincontainer">
      <button
        onClick={() => setShouldFetch(true)} // Trigger fetching by setting the flag
        style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
        disabled={isLoading}
      >
        {isLoading? "Loading..." : "Get Random User"}
      </button>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        user && (
          <div className="userCard">
            <div className="userImage">
            <img className="userImage"
              src={user.picture.large}
              alt="User"
              style={{ borderRadius: "50%", }}
            />
            </div>
            <div className="userDetails">
            <p>
              <strong>Name:</strong> {user.name.title} {user.name.first} {user.name.last}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>PhoneNumber:</strong> {user.phone}
            </p>
            </div>
            <div className="viewMoreButton">
            <button style={{width:"150px"}} onClick={() => navigate("/userdetails", { state: { user } })}>View More</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default App;
