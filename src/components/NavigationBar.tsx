import "../styles/index.scss";

const NavigationBar = () => {
  return (
    // TODO: Deicde the general look of the navigation bar, and add more items if needed
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <a className="nav-item" href="/">
            ABP-VIN-DECODER
          </a>
        </li>
        <li>
          {/* Should be moved to another place I guess. */}
          <a className="nav-item" href="/variables">
            Variables
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
