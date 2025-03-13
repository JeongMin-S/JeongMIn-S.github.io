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
      }}
    >
      <div>JeongMin-S</div>
      <div>
        <input type="text" placeholder="Search"></input>
        <button>button</button>
      </div>
      <div>userIcon</div>
    </header>
  );
}
export default Header;
