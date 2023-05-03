import "./Header.css";

const Header = ({ data }) => {
  const name = data?.name;
  const owner = data?.owner;

  return (
    <div className="page-header">
      <img className="avatar" src={owner?.profileImageSource} alt="avatar" />
      <div className="name">{owner?.name}</div>
      <div className="bookmark">{name}</div>
    </div>
  );
};

export default Header;
