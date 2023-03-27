export default function Navbar() {
  return (
    <div className="p-3 flex justify-center items-center bg-base-100 text-xs">
      <div className="">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <h3 className="cursor-default">
              <p id="yoda">Master Yoda</p>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </h3>
            <ul className="p-2 bg-base-100">
              <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864"/></li>
            </ul>
          </li>
          <li tabIndex={0}>
            <h3 className="cursor-default">
              <p id="chew">Chewbacca</p>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </h3>
            <ul className="p-2 bg-base-100">
              <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=0%2C48%2C1536%2C768"/></li>
            </ul>
          </li>
          <li tabIndex={0}>
            <h3 className="cursor-default">
              <p id="darth">Darth Vader</p>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </h3>
            <ul className="p-2 bg-base-100">
              <li><img className="cursor-default" src="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720" /></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}