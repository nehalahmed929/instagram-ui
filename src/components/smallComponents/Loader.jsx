const Loader = () => {
  return (
    <div
      style={{
        backgroundColor: "#0002",

        width: "100vw",
        height: "100vh",
        position: "fixed",
        display: "flex",
        // alignItems: "center",

        // justifyContent: "center",
        zIndex: 22,
        display: "none",
      }}
      id="my-loader"
    >
      <div
        class="lds-spinner"
        style={{ alignSelf: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
