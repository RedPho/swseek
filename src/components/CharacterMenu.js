export default function ({ position, yodaFound, chewFound, vaderFound, maulFound }) {
  if (yodaFound && chewFound && vaderFound && maulFound) {
    return;
  }
  return (
    <div style={{ top: `${position.y}px`, left: `${position.x}px` }} className={"absolute"}>
      <ul className="menu menu-compact bg-base-100 w-40 p-2 rounded-box flex flex-column justify-center items-center">
        {!yodaFound &&
          <li><button id="yodaBtn">Master Yoda</button></li>
        }
        {!chewFound &&
          <li><button id="chewBtn">Chewbacca</button></li>
        }
        {!vaderFound &&
          <li><button id="vaderBtn">Darth Vader</button></li>
        }
        {!maulFound &&
          <li><button id="maulBtn">Darth Maul</button></li>
        }
      </ul>
    </div>
  )
}