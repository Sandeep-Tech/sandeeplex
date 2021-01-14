// import logo from './logo.svg';

// Style
import "./App.css";

// Components
import Header from "./components/Header/Header";
import PromotedContent from "./components/PromotedContent/PromotedContent";
import ContentWall from "./components/ContentWall/ContentWall";
import ContentSection from "./components/common/ContentSection/ContentSection";
import BillBoard from "./components/common/BillBoard/BillBoard";
import LanguageSelectionSlider from "./components/LanguageSelectionSlider/LanguageSelectionSlider";

// Assets
// import LandscapePlaceholder from "./assets/generic/landscape-block.png";
import LandscapePlaceholder from "./assets/content-wall/1.jpg";
import BillBoardImageSource from "./assets/billboard/gemplex-billboard.jpg";

// DUMMY DATA CREATION
// data for LANGUAGES section
import { languages } from "./data/languages";
// ORIGINALS - horizontal content section dummy data creation.
const originalsContentSectionSubHeadings = [
  "Series",
  "Non Fiction",
  "Exclusives",
  "Musicals",
  "Shorts",
  "Lyricals",
];

// MOVIES - horizontal content section dummy data creation.
const moviesContentSectionSubHeadings = ["Original Web Film", "Premium Shorts"];

// common to ORIGINALS and MOVIES
const LandscapePlaceholderArray = [];
for (let i = 0; i < 5; i++)
  LandscapePlaceholderArray.push(
    <img src={LandscapePlaceholder} alt={`img ${i}`} />
  );

function App() {
  return (
    <div className="App">
      <Header />

      <PromotedContent />

      <ContentWall />

      <ContentSection
        images={LandscapePlaceholderArray}
        heading="ORIGINALS"
        subheadings={originalsContentSectionSubHeadings}
      />

      <BillBoard imgSrc={BillBoardImageSource} />

      <ContentSection
        images={LandscapePlaceholderArray}
        heading="MOVIES"
        subheadings={moviesContentSectionSubHeadings}
      />

      <BillBoard imgSrc={BillBoardImageSource} />

      <LanguageSelectionSlider languages={languages} />
    </div>
  );
}

export default App;
