function Header() {
  return (
    <header
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 0,
        padding: "10px 10px",
      }}
    >
      <div className="start">
        <div
          className="logo"
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            border: "solid",
          }}
        >
          JeongMin-S
        </div>
      </div>

      <div className="center" style={{ display: "flex" }}>
        <div
          className="search-box"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              width: 550,
              minWidth: 20,
              height: 40,
              overflow: "hidden",
            }}
          ></input>
          <button style={{ width: 60, height: 45, overflow: "hidden" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="searchIcon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="end" style={{ display: "flex" }}>
        <div
          className="creatPostButton"
          style={{
            border: "solid",
          }}
        >
          CreatPost
        </div>
        <div
          className="user"
          style={{
            border: "solid",
          }}
        >
          who?
        </div>
      </div>
    </header>
  );
}
export default Header;
