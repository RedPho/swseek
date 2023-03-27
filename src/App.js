import { useState, useEffect } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import Leaderboard from './components/Leaderboard';
import StarWars from './assets/star_wars_wimmelbilder.jpg'
import Navbar from './components/Navbar';
import CharacterMenu from './components/CharacterMenu';

const firebaseConfig = {
  apiKey: "AIzaSyArdJrnw0zuHb2fivN2rBqYq4PV3pmJMeM",
  authDomain: "swseek-b4f26.firebaseapp.com",
  projectId: "swseek-b4f26",
  storageBucket: "swseek-b4f26.appspot.com",
  messagingSenderId: "707684592389",
  appId: "1:707684592389:web:ef11d7c4d3d3c6fd8b656c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [playing, setPlaying] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
  function handleClick(e) {
    console.log("x " + e.nativeEvent.offsetX);
    console.log("y " + e.nativeEvent.offsetY);
    let positionForMenu = {x: e.nativeEvent.offsetX-100, y: e.nativeEvent.offsetY+73};
    setClicked(!clicked);
    setMenuPosition(positionForMenu);
  }
  return (
    <div className="flex flex-column">
      {playing ?
        <div>
          <Navbar />
          <img style={{minWidth: "1600px", minHeight: "2400px", maxWidth: "1000px", maxHeight: "1500px"}} className='' onClick={handleClick} src={StarWars} ></img>
        </div>
        
        :<Leaderboard />
      }
      {clicked &&
        <CharacterMenu position={menuPosition} />
      }
    </div>
  );
}

export default App;
