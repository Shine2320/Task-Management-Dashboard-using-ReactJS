export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ height: 40, backgroundColor: "#5252ff", color: "white" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div className="copyright text-center">
          © {new Date().getFullYear()} Task Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
