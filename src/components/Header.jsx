function Header() {
  return (
    <header
      id="header"
      style={{
        border: "1px solid black",
        padding: 20,
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>JeongMin-S</div>
      <div
        style={{
          display: "flex",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid black",
          width: 300,
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{ marginLeft: 10, flex: 1, border: "none", outline: "none" }}
        ></input>
        <button style={{ border: "none", cursor: "pointer", outline: "none" }}>
          button
        </button>
      </div>
      <div>userIcon</div>
    </header>
  );
}
export default Header;
