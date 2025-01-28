import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./task16.css"
import {User} from "../Entity/user"
import { fetchData } from "../Service/userapi";



const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleFetchUser = async () => {
    setIsLoading(true); 
    setError(null); 
    try {
      const fetchedUser = await fetchData(); // Fetch user from the API
      setUser(fetchedUser); // Update user state with the fetched data
    } catch (error) {
      setError( "Failed to fetch user data."+ error); 
    } finally {
      setIsLoading(false); 
      setShouldFetch(false);
    }
  };

  useEffect(() => {
    if (!shouldFetch) return;
    handleFetchUser();
  }, [shouldFetch]);
  

  return (
    <div className="maincontainer">
      <button
        onClick={() => setShouldFetch(true)} 
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
