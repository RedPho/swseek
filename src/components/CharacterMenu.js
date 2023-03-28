export default function({ position }) {
  return (
    <div style={{top: `${position.y}px`, left: `${position.x}px`}} className={"absolute"}>
      <ul  className="menu menu-compact bg-base-100 w-40 p-2 rounded-box flex flex-column justify-center items-center">
        <li><button id="yodaBtn">Master Yoda</button></li>
        <li><button id="chewBtn">Chewbacca</button></li>
        <li><button id="vaderBtn">Darth Vader</button></li>
        <li><button id="maulBtn">Darth Maul</button></li>
      </ul>
    </div>
  )
}