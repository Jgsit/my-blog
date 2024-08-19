import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import NavigationMenu from "./assets/components/NavigationMenu";
import Content from "./assets/components/Content";

function App() {
  return (
    <>
      <Header title="My Blog" baseline="An awesome baseline" />
      <main>
        <div className="container">
          <NavigationMenu />
          <div className="content">
            <Content />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
