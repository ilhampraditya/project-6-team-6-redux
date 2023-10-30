import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector((state) => state.auth);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;

    if (searchQuery.trim() === "") {
      return;
    }

    const searchUrl = `/search?page=1&query=${searchQuery}`;

    navigate(searchUrl);
  };

  const onLogout = () => {
    dispatch(logout());

    //* Redirect to home or reload the home
    navigate("/login");
  };

  // Login with redux
  useEffect(() => {
    if (token) {
      dispatch(getMe(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <header className="p-4 fixed w-full z-50">
      <nav className="container flex flex-col justify-between items-center md:flex-row">
        <a
          href="/"
          className="text-4xl font-bold text-red-600 mb-2 navbar-logo"
        >
          Movielist
        </a>
        <div className="w-full relative mb-3 md:w-1/2 md:mb-0">
          {user && (
            <>
              <form action="search" onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="What do you want to watch?"
                  className="outline-none font-semibold text-md bg-transparent border-none ring-2 ring-red-600 rounded-full border-red-600 w-[100%] px-4 py-1 md:py-2"
                />
                <div className="absolute top-0 right-0 transform translate-y-1 md:translate-y-2  -translate-x-3">
                  <img
                    width="25px"
                    height="25px"
                    src="/search.svg"
                    alt="Search.svg"
                  />
                </div>
              </form>
            </>
          )}
        </div>
        <div className="flex justify-center items-center gap-2 relative">
          {user ? (
            <>
              <div className="relative">
                <button
                  className="px-2 py-1 md:px-4 md:py-2 bg-red-600 hover:bg-red-700 border-2 border-red-600 text-white rounded-lg font-bold transition-all duration-300"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <img src="/drop-user2.png" width={30} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
                    <div className="px-4 inline-block py-2 border-b-2 border-slate-900 text-md">
                      Hi! {user.name}
                    </div>
                    <a
                      href="/myprofile"
                      className="block px-4 py-2 text-center text-red-600 hover:text-red-400"
                    >
                      My Profile
                    </a>
                    <button
                      type="button"
                      className="px-3 py-1 w-full md:px-6 md:py-2 bg-red-700 hover:bg-red-900 border-2 border-red-600 text-white rounded font-bold transition-all duration-300"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
