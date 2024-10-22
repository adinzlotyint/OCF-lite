interface Props {
  setPage: (page: 0 | 1 | 2) => void;
}

const NavBar = ({ setPage }: Props) => {
  return (
    <div className="z-50 fixed flex top-0 left-0 right-0 bg-white h-16 justify-between items-center shadow-md hover:shadow-lg transition-all xl:ml-4 xl:mt-8 xl:mr-8 xl:static xl:border-transparent xl:rounded-xl">
      {/* Logo */}
      <p className="font-bold text-xl ml-2 font-roboto text-secondary">
        <a className="ml-4 text-xl select-none">Balance Vision</a>
      </p>
      <div className="dropdown dropdown-bottom dropdown-end">
        {/* Dropdown button */}
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
        {/* Dropdown menu */}
        <ul
          tabIndex={0}
          className="font-roboto menu menu-sm dropdown-content bg-primary text-white rounded-box z-[1] mt-3 w-64 xl:w-52 p-2 shadow-lg"
        >
          <li>
            <a onClick={() => setPage(0)}>Reporting</a>
          </li>
          <li>
            <a onClick={() => setPage(1)}>Manual</a>
          </li>
          <li>
            <a onClick={() => setPage(2)}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
