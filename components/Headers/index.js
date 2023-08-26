import React, { useState } from 'react'

function Headers() {
  const [open, setOpen] = useState(false)
  return (
    <header className="page-header bg-[#2dc46a] w-full flex justify-between p-4 items-center" id="page-header">
      <a
        href="/"
        className="page-header__logo cursor-pointer w-[110px]"
        title="CVmaker-Logo"
      >
        <svg className="h-[20px]" fill="#ffffff" viewBox="0 0 354.82 69.26">
          <path d="M23.41,29.9a8.36,8.36,0,0,0-7.3,3.83q-2.62,3.83-2.62,10.58,0,14,10.66,14a21.83,21.83,0,0,0,6.24-.9,62.44,62.44,0,0,0,6.08-2.16V66.35A33.63,33.63,0,0,1,22.71,69q-11,0-16.85-6.37T0,44.24A29.4,29.4,0,0,1,2.84,31,20.31,20.31,0,0,1,11,22.21a24.67,24.67,0,0,1,12.53-3.07,34.53,34.53,0,0,1,15,3.42l-4,10.33a45.25,45.25,0,0,0-5.38-2.13A18.81,18.81,0,0,0,23.41,29.9Z" />
          <path d="M73.18,19.84H87.86L72,68.38H56.51L40.67,19.84H55.42L62,44.44a75.14,75.14,0,0,1,2.26,11.42q.23-2.32.93-5.81t1.23-5.48Z" />
          <path d="M157,68.38V37q0-5.76-2.46-8.64t-7.65-2.88q-6.81,0-10.06,3.91t-3.25,12V68.38h-7.29V37q0-5.76-2.46-8.64t-7.69-2.88q-6.86,0-10,4.11t-3.19,13.47V68.38H95.59V20.21h5.93l1.19,6.59h.35a14.34,14.34,0,0,1,5.82-5.49,17.79,17.79,0,0,1,8.42-2q11.29,0,14.77,8.17h.35a15.36,15.36,0,0,1,6.24-6,19.36,19.36,0,0,1,9.32-2.2q8.17,0,12.24,4.2T164.28,37V68.38Z" />
          <path d="M208.92,68.38l-1.45-6.86h-.35a20.27,20.27,0,0,1-7.19,6.13,21.9,21.9,0,0,1-8.94,1.6q-7.16,0-11.23-3.69t-4.06-10.5q0-14.59,23.33-15.29l8.17-.26v-3q0-5.67-2.44-8.37t-7.8-2.7q-6,0-13.62,3.69l-2.24-5.58a34.27,34.27,0,0,1,7.8-3,33.81,33.81,0,0,1,8.5-1.1q8.61,0,12.77,3.82t4.15,12.26V68.38Zm-16.48-5.14q6.81,0,10.7-3.74T207,49V44.69l-7.29.31q-8.7.31-12.55,2.7a8.15,8.15,0,0,0-3.85,7.45,7.51,7.51,0,0,0,2.4,6A9.94,9.94,0,0,0,192.45,63.24Z" />
          <path d="M236.57,43.73a85.77,85.77,0,0,1,5.76-7l15.56-16.48h8.66L247,40.74,267.9,68.38h-8.83l-17-22.76-5.49,4.75v18h-7.21V0h7.21V36.25q0,2.42-.35,7.47Z" />
          <path d="M296.95,69.26q-10.68,0-16.85-6.5t-6.17-18.06q0-11.64,5.73-18.5t15.4-6.86q9.05,0,14.33,6T314.66,41v4.61H281.48q.22,8.48,4.28,12.88t11.45,4.39a38.79,38.79,0,0,0,15.38-3.25v6.5a38.57,38.57,0,0,1-7.32,2.4A41.12,41.12,0,0,1,296.95,69.26Zm-2-43.81a11.91,11.91,0,0,0-9.25,3.78q-3.45,3.78-4.06,10.46h25.18q0-6.9-3.08-10.57T295,25.44Z" />
          <path d="M349.07,19.34a28.55,28.55,0,0,1,5.76.53l-1,6.77a24.86,24.86,0,0,0-5.27-.66,12.84,12.84,0,0,0-10,4.75,17.31,17.31,0,0,0-4.15,11.82V68.38h-7.29V20.21h6l.83,8.92h.35a21.16,21.16,0,0,1,6.46-7.25A14.55,14.55,0,0,1,349.07,19.34Z" />
        </svg>
      </a>

      <div
        className=""
        id="page-header__navigation"
      >
        <svg
          onClick={() => setOpen(true)}
          className={`cursor-pointer ${!open ? "" : "hidden"}`}
          fill="#ffffff"
          height={34}
          viewBox="0 0 24 24"
          width={34}
          id="page-header__menu__button--open"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <div className={`slidein fixed bg-[rgba(0,0,0,.88)] w-full h-screen left-0 top-0 ${!open ? "hidden" : ""}`}>
          <div className="flex justify-end m-4">
            <svg
              onClick={() => setOpen(false)}
              className={`cursor-pointer ${!open ? "hidden" : ""} `}
              id="page-header__menu__button--close"
              fill="#ffffff"
              height={34}
              viewBox="0 0 24 24"
              width={34}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>

          <div className="flex justify-center absolute w-full top-0">
            <ul className="page-header__menu text-white  ">
              <li className="page-header__menu__item">
                <a href="/" title="Buat CV">
                  Buat CV
                </a>
              </li>
              <li className="page-header__menu__item">
                <a href="#" title="Contoh CV">
                  Templat CV
                </a>
              </li>
              <li className="page-header__menu__item">
                <a href="#" title="Layanan Penulisan CV">
                  Layanan Penulisan CV
                </a>
              </li>
              <li className="page-header__menu__item">
                <a href="#" title="Blog">
                  Blog
                </a>
              </li>
              <li className="page-header__menu__item">
                <a href="#" title="">
                  Biaya
                </a>
              </li>
              <li className="page-header__menu__item">
                <a href="#" title="Kontak">
                  Kontak
                </a>
              </li>
              <li className="page-header__menu__item">
                <a href="#" title="Masuk">
                  Masuk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <svg
          onClick={() => setOpen(false)}
          className={`cursor-pointer ${!open ? "hidden" : ""} opacity-0`}
          id="page-header__menu__button--close"
          fill="#ffffff"
          height={34}
          viewBox="0 0 24 24"
          width={34}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        {/*  */}
      </div>


    </header>

  )
}

export default Headers