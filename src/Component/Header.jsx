import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;

    if (searchQuery.trim() === "") {
      return;
    }

    const searchUrl = `/search?page=1&query=${searchQuery}`;

    navigate(searchUrl);
  };

  return (
    <header className="p-4 fixed w-full z-50">
      <nav className="flex flex-col justify-between items-center md:flex-row">
        <a href="#" className="text-4xl font-bold text-red-600 mb-2">
          Movielist
        </a>
        <div className="w-full relative mb-3 md:w-1/2 md:mb-0">
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
        </div>
        <div className="flex justify-center items-center gap-2">
          <a
            href="/"
            className="px-3 py-1 md:px-6 md:py-2 bg-transparent border-2 border-red-600 text-red-600 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Login
          </a>
          <a
            href="/"
            className="px-3 py-1 md:px-6 md:py-2 bg-red-600 border-2 border-red-600 text-white rounded-full font-bold hover:bg-transparent hover:text-red-600 transition-all duration-300"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
