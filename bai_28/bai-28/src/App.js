// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import NavigationMenu from "./components/NavigationMenu/index.js";
import Content from "./components/Content/index.js";
import MainContent from "./components/MainContent/index.js";

function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number={10} active={true} />
        <MainContent />
        <Content text="Content 2" number={10} active={false} />
      </div>
      <Footer />
    </>
  );
}

export default App;
