import { useState, useEffect } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";
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
const coordinatesRef = collection(db, "coordinates");

function App() {
  const [playing, setPlaying] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
  const [clickedPosition, setClickedPosition] = useState(null);
  const [yodaFound, setYodaFound] = useState(false);
  const [maulFound, setMaulFound] = useState(false);
  const [chewFound, setChewFound] = useState(false);
  const [vaderFound, setVaderFound] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  function handleClick(e) {
    setClickedPosition({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    setClicked(!clicked);
    setMenuPosition({x: e.nativeEvent.offsetX-100, y: e.nativeEvent.offsetY+73});
  }

  async function checkCorrect(x) {
    getDocs(coordinatesRef)
      .then((snapshot) => {
        let charCoordinates = snapshot.docs[0].data();
        if (x == "yoda") {
          if (charCoordinates.yodaXStart < clickedPosition.x && charCoordinates.yodaXEnd > clickedPosition.x &&
            charCoordinates.yodaYStart < clickedPosition.y && charCoordinates.yodaYEnd > clickedPosition.y) {
              setYodaFound(true);
            }
        }
        else if (x == "maul") {
          console.log("maulll")
          if (charCoordinates.maulXStart < clickedPosition.x && charCoordinates.maulXEnd > clickedPosition.x &&
            charCoordinates.maulYStart < clickedPosition.y && charCoordinates.maulYEnd > clickedPosition.y) {
              setMaulFound(true);
            }
        }
        else if (x == "chew") {
          if (charCoordinates.chewXStart < clickedPosition.x && charCoordinates.chewXEnd > clickedPosition.x &&
            charCoordinates.chewYStart < clickedPosition.y && charCoordinates.chewYEnd > clickedPosition.y) {
              setChewFound(true);
            }
        }
        else if (x == "vader") {
          if (charCoordinates.vaderXStart < clickedPosition.x && charCoordinates.vaderXEnd > clickedPosition.x &&
            charCoordinates.vaderYStart < clickedPosition.y && charCoordinates.vaderYEnd > clickedPosition.y) {
              setVaderFound(true);
            }
        }
      })
  }

  useEffect(() => {
    let timer = setInterval(() => {
      let newSeconds;
      let newMinutes;
      if(seconds == 59) {
        newMinutes = minutes + 1;
        newSeconds = 0;
        if(minutes == 59) {
          setHours(hours + 1);
          newMinutes = 0;
        }
        setMinutes(newMinutes);
      }
      else {
        newSeconds = seconds + 1;
      }
      setSeconds(newSeconds);
    }, 1000);
    if (yodaFound && maulFound && chewFound && vaderFound) {
      clearInterval(timer);
    }
    return () => { clearInterval(timer) };
  }, [seconds])

  useEffect(()=> {
    let yodaBtn = document.getElementById("yodaBtn");
    let maulBtn = document.getElementById("maulBtn");
    let chewBtn = document.getElementById("chewBtn");
    let vaderBtn = document.getElementById("vaderBtn");
    if(yodaBtn) {
      yodaBtn.onclick = () => { checkCorrect("yoda") };
    }
    if(maulBtn) {
      maulBtn.onclick = () => { checkCorrect("maul") };
    }
    if(chewBtn) {
      chewBtn.onclick = () => { checkCorrect("chew") };
    }
    if(vaderBtn) {
      vaderBtn.onclick = () => { checkCorrect("vader") };
    }
  }, [clicked])

  useEffect(() => {
    if (yodaFound) {
      alert("You Found Yoda!");
    }
  }, [yodaFound])

  useEffect(() => {
    if (maulFound) {
      alert("You Found Darth Maul!");
    }
  }, [maulFound])

  useEffect(() => {
    if (chewFound) {
      alert("You Found Chewbacca!");
    }
  }, [chewFound])

  useEffect(() => {
    if (vaderFound) {
      alert("You Found Darth Vader!");
    }
  }, [vaderFound])

  useEffect(() => {
    if(clickedPosition) {
      console.log(clickedPosition);
    }
  }, [clickedPosition])

  return (
    <div className="flex flex-column">
      {playing ?
        <div>
          <Navbar seconds={seconds} hours={hours} minutes={minutes} vaderFound={vaderFound} chewFound={chewFound} maulFound={maulFound} yodaFound={yodaFound} />
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
