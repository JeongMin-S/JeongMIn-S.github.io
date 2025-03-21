import Header from "../components/Header";
import Category from "../components/Category";
import Tag from "../components/Tag";
import Advertisement from "../components/Advertisement";
import Feed from "../components/Feed";

function Page() {
  return (
    <div
      style={{
        padding: 10,
        height: "calc(100vh - 20px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header></Header>
      <div
        id="container"
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
          marginTop: 10,
        }}
      >
        <Category></Category>
        <div
          id="main"
          style={{
            marginLeft: 10,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <Tag></Tag>
          <Advertisement></Advertisement>
          <Feed></Feed>
        </div>
      </div>
    </div>
  );
}
export default Page;
