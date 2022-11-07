import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", countory = "Japan" }) => {
  return (
    <div className="profile">
      <h3>Name:{name}</h3>
      <h3>Age:{age}</h3>
      <h3>From:{countory}</h3>
    </div>
  );
};

export default Profile;
