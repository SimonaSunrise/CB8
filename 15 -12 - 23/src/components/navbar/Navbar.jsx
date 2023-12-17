import "./index.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img
        src="../public/clownface.png"
        alt="clow face"
        width="px"
        height="30px"
      />
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <input type="text" placeholder="Search...🔎" />
    </nav>
  );
};

export default NavBar;
