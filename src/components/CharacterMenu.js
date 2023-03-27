export default function({ position }) {
  return (
    <div style={{top: `${position.y}px`, left: `${position.x}px`}} className={"absolute"}>
      <ul  className="menu menu-compact bg-base-100 w-30 p-2 rounded-box flex flex-column justify-center items-center">
        <li><button>Master Yoda</button></li>
        <li><button>Chewbacca</button></li>
        <li><button>Darth Vader</button></li>
      </ul>
    </div>
  )
}