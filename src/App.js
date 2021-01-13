// import logo from './logo.svg';

// Style
import "./App.css";

// Components
import Header from "./components/Header/Header";
import PromotedContent from "./components/PromotedContent/PromotedContent";
import ContentWall from "./components/ContentWall/ContentWall";
import ContentSection from "./components/common/ContentSection/ContentSection";

// Assets
// import images here

function App() {
  return (
    <div className="App">
      <Header />
      <PromotedContent />
      <ContentWall />
      <ContentSection />
    </div>
  );
}

export default App;
