import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
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
const highscoresRef = collection(db, "highscores");

function App() {
  const [playing, setPlaying] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [clickedPosition, setClickedPosition] = useState(null);
  const [yodaFound, setYodaFound] = useState(false);
  const [maulFound, setMaulFound] = useState(false);
  const [chewFound, setChewFound] = useState(false);
  const [vaderFound, setVaderFound] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [highscores, setHighscores] = useState([]);
  const [namePhase, setNamePhase] = useState(false);
  const [name, setName] = useState("");

  function handleClick(e) {
    setClickedPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    setClicked(!clicked);
    setMenuPosition({ x: e.nativeEvent.offsetX - 100, y: e.nativeEvent.offsetY + 73 });
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

  async function getHighscores() {
    let highscoresQuery = query(highscoresRef, orderBy("seconds"), limit(5));
    let hs = await getDocs(highscoresQuery)
    let newHighscores = [];
    hs.forEach(doc => {
      newHighscores.push(doc.data())
    });
    setHighscores(newHighscores);
    console.log(newHighscores);
  }
  useEffect(() => {
    getHighscores();
  }, [])

  useEffect(() => {
    let timer = setInterval(() => {
      let newSeconds;
      let newMinutes;
      if (seconds == 59) {
        newMinutes = minutes + 1;
        newSeconds = 0;
        if (minutes == 59) {
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
      setNamePhase(true);
      setPlaying(false);
    }
    return () => { clearInterval(timer) };
  }, [seconds])

  useEffect(() => {
    let yodaBtn = document.getElementById("yodaBtn");
    let maulBtn = document.getElementById("maulBtn");
    let chewBtn = document.getElementById("chewBtn");
    let vaderBtn = document.getElementById("vaderBtn");
    if (yodaBtn) {
      yodaBtn.onclick = () => { checkCorrect("yoda") };
    }
    if (maulBtn) {
      maulBtn.onclick = () => { checkCorrect("maul") };
    }
    if (chewBtn) {
      chewBtn.onclick = () => { checkCorrect("chew") };
    }
    if (vaderBtn) {
      vaderBtn.onclick = () => { checkCorrect("vader") };
    }
  }, [clicked])

  async function submitName() {
    let sec = (hours * 3600) + (minutes * 60) + seconds;
    if (name != "") {
      await addDoc(collection(db, "highscores"), {
        "name": name,
        "seconds": sec
      })
    }

    getHighscores();
    setNamePhase(false);
  }

  function playAgain() {
    setClicked(false);
    setYodaFound(false);
    setMaulFound(false);
    setChewFound(false);
    setVaderFound(false);
    setPlaying(true);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setName("");
  }

  return (
    <div className="flex flex-column">
      {playing &&
        <div>
          <Navbar seconds={seconds} hours={hours} minutes={minutes} vaderFound={vaderFound} chewFound={chewFound} maulFound={maulFound} yodaFound={yodaFound} />
          <img style={{ minWidth: "1600px", minHeight: "2400px", maxWidth: "1000px", maxHeight: "1500px" }} className='' onClick={handleClick} src={StarWars} ></img>
          <footer className='p-4 flex justify-center items-center'>Picture From <a className='link ml-1' target="_blank" rel="noopener noreferrer" href='https://www.reddit.com/r/wimmelbilder/comments/ulfl0m/wheres_darth_vader_artwork_by_gus_morais_oc/'>Gus Morais</a></footer>
        </div>
      }
      {!playing && !namePhase &&
        <Leaderboard handleClick={playAgain} highscores={highscores} />
      }
      {namePhase &&
        <div className='flex flex-col items-center justify-center absolute self-start top-1/2 left-1/2 bottom-1/2 right-1/2 m-auto'>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Congratulations, you found all of them in {(hours * 3600) + (minutes * 60) + seconds} seconds!</h2>
              <input value={name} onChange={(e) => { setName(e.target.value); console.log(name) }} type="text" placeholder="Enter Your Name:" className="input input-bordered input-primary" /><button onClick={submitName} className='btn'>Submit</button>
            </div>
          </div>
        </div>
      }
      {clicked && !namePhase &&
        <CharacterMenu yodaFound={yodaFound} maulFound={maulFound} vaderFound={vaderFound} chewFound={chewFound} position={menuPosition} />
      }
    </div>
  );
}

export default App;
