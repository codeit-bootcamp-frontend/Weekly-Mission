import { useEffect, useState } from "react";
import getFolderData from "./api/getFolderData";
import Gnb from "./components/Gnb/Gnb";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CardList from "./components/CardList";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [folderData, setFolderData] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  async function getAPIData() {
    try {
      const folder = await getFolderData();
      setFolderData(folder);
      setIsLoad(true);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="App">
      <Gnb isLoad={isLoad} />
      <Header data={folderData} />
      <main>
        <div className="main-container">
          <SearchBar />
          {folderData && <CardList folderData={folderData} isLoad={isLoad} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
