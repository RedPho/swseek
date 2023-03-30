export default function Leaderboard({ highscores, handleClick }) {
  return (
    <div className="m-auto flex flex-col justify-center">
      <h1 className="alert text-center">You will try to find characters from Star Wars. Good luck!</h1>
      <div className="overflow-x-auto flex flex-col justify-center items-center text-center border-4 border-double rounded-lg p-2 border-pink-300">
        <h2 className="text-center text-xl bold">Leaderboard</h2>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {highscores.map((data, index) => {
              return (
                <tr key={index}>
                  <th className="text-center">{index+1}</th>
                  <th className="text-center">{data.name}</th>
                  <th className="text-center">{data.seconds} seconds</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleClick} className="btn btn-secondary">Play</button>
    </div>
  )
}