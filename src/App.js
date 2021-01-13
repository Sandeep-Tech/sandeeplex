// import logo from './logo.svg';

// Style
import "./App.css";

// Components
import Header from "./components/Header/Header";
import PromotedContent from "./components/PromotedContent/PromotedContent";
import ContentWall from "./components/ContentWall/ContentWall";
import ContentSection from "./components/common/ContentSection/ContentSection";

// Assets
// import LandscapePlaceholder from "./assets/generic/landscape-block.png";

// dummy data creation
const LandscapePlaceholderArray = [];
for (let i = 0; i < 5; i++) LandscapePlaceholderArray.push("img");

const contentSectionSubHeadings = [
  "Series",
  "Non Fiction",
  "Exclusives",
  "Musicals",
  "Shorts",
  "Lyricals",
];

function App() {
  return (
    <div className="App">
      <Header />
      <PromotedContent />
      <ContentWall />
      <ContentSection
        images={LandscapePlaceholderArray}
        heading="originals"
        subheadings={contentSectionSubHeadings}
      />
    </div>
  );
}

export default App;
