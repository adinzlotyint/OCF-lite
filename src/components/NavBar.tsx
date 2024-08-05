const NavBar = () => {
  return (
    <div className="z-50 xl:static fixed top-0 left-0 right-0 flex bg-zinc-100 xl:border-transparent border border-zinc-200 xl:bg-white m-8 rounded-2xl h-16 justify-between items-center shadow-md">
      <p className="font-bold text-2xl ml-2 font-roboto text-secondary">
        <a className="btn btn-ghost text-xl">OCF lite</a>
      </p>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-square mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="font-roboto menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow-lg right-0 "
        >
          <li>
            <a>Reporting</a>
          </li>
          <li>
            <a>Manual</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
