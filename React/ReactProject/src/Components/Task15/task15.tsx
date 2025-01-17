import React from "react";
import axios from "axios";

const baseURL = "https://randomuser.me/api/0.8/?results=10";

const App = () => {
    const [users, setUsers] = React.useState<any[]>([]);

    const fetchUsers = () => {
        axios.get(baseURL).then((response) => {
            const fetchedUsers = response.data.results.map((result: any) => result.user);
            setUsers(fetchedUsers); 
        });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={fetchUsers} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Get Users
            </button>
            {users.length > 0 && (
                <div style={{ marginTop: '20px', textAlign: 'left' }}>
                    {users.map((user, index) => (
                        <div key={index}  className="usersApi" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', display:"flex" ,flexDirection:'column' , alignItems:'center' }}>
                            <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
                            <p><strong>Name:</strong> {user.name.title} {user.name.first} {user.name.last}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Location:</strong> {user.location.city}, {user.location.state},  {user.location.street}</p>  
                            <p><strong>PostCode: </strong>{user.location.zip}</p>
                            <p><strong>PhoneNumber: </strong>{user.phone}</p>                          
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
