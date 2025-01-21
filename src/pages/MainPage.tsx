import { Footer } from "./footer";
import { Header } from "./Header";

export const MainPage = () => {
  return (
    <div className="MainDiv">
      <Header></Header>
      <div className="container" style={{ height: "100%" }}></div>
      <Footer></Footer>
    </div>
  );
};
