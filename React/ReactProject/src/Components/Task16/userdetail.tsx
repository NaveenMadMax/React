
import { useLocation, useNavigate } from "react-router-dom";


const UserDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return (
      <div className="maincontainer">
        <p style={{ color: "red" }}>No user data available.</p>
        <button onClick={() => navigate("/task16")} style={{ padding: "10px 20px" }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="maincontainer">
    <div className="userCard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => navigate("/task16", { state: { user } })}
          style={{
            padding: "5px 10px",
          }}
        >
          Back
        </button>
        <img
          src={user.picture.large}
          alt="User Thumbnail"
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
          }}
        />
      </div>
      <div className="userDetails">
        <p>
          <strong>Name:</strong> {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p>
          <strong>Location:</strong> {user.location.street.number}{" "}
          {user.location.street.name}, {user.location.city}
        </p>
        <p>
          <strong>Password:</strong> {user.login.password}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phone}
        </p>
      </div>
    </div>
    </div>
  );
};

export default UserDetail;
