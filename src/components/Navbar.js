export default function Navbar({ vaderFound, chewFound, yodaFound, maulFound, minutes, seconds, hours }) {
  if (yodaFound && chewFound && vaderFound && maulFound) {
    return (
      <div className="sticky top-0 p-3 flex justify-center items-center bg-base-100 text-s">
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": hours }}></span>h
          <span style={{ "--value": minutes }}></span>m
          <span style={{ "--value": seconds }}></span>s
        </span>
        <ul className="menu menu-horizontal px-1">
          <li><h3 className="cursor-default alert">Congratilations, you found all of them!</h3></li>
        </ul>
      </div>
    )
  }
  return (
    <div className="sticky top-0 p-3 flex justify-center items-center bg-base-100 text-s">
      <span className="countdown font-mono text-2xl">
        <span style={{ "--value": hours }}></span>h
        <span style={{ "--value": minutes }}></span>m
        <span style={{ "--value": seconds }}></span>s
      </span>
      <div>
        <ul className="menu menu-horizontal px-1">
          {!yodaFound ?
            <li tabIndex={0}>
              <h3 className="cursor-default">
                <p id="yoda">Master Yoda</p>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </h3>
              <ul className="p-2 bg-base-100">
                <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864" /></li>
              </ul>
            </li> :
            <li><h3 className="cursor-default">You found Yoda</h3></li>
          }
          {!chewFound ?
            <li tabIndex={0}>
              <h3 className="cursor-default">
                <p id="chew">Chewbacca</p>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </h3>
              <ul className="p-2 bg-base-100">
                <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=0%2C48%2C1536%2C768" /></li>
              </ul>
            </li> :
            <li><h3 className="cursor-default">You found Chewbacca</h3></li>
          }
          {!vaderFound ?
            <li tabIndex={0}>
              <h3 className="cursor-default">
                <p id="darth">Darth Vader</p>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </h3>
              <ul className="p-2 bg-base-100">
                <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720" /></li>
              </ul>
            </li> :
            <li><h3 className="cursor-default">You found Darth Vader</h3></li>
          }
          {!maulFound ?
            <li tabIndex={0}>
              <h3 className="cursor-default">
                <p id="darth">Darth Maul</p>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </h3>
              <ul className="p-2 bg-base-100">
                <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/Darth-Maul_632eb5af.jpeg?region=75%2C42%2C1525%2C858" /></li>
              </ul>
            </li> :
            <li><h3 className="cursor-default">You found Darth Maul</h3></li>
          }
        </ul>
      </div>
    </div>
  )
}