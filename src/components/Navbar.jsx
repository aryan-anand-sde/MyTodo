const MyNavbar = () => {
  return (
    <>
      <nav className="p-5 bg-slate-900 text-white flex gap-9">
        <div className="logo font-bold text-xl">My todos</div>

        <ul className="flex items-center gap-3">
          <li
            onClick={() =>
              window.open("https://github.com/aryan-anand-sde", "_blank")
            }
            style={{ cursor: "pointer" }}
          >
            GitHub
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/aryan-anand-sde/",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          >
            LinkedIn
          </li>
          <li
            onClick={() => window.open("https://www.aryananand.me/", "_blank")}
            style={{ cursor: "pointer" }}
          >
            Portfolio
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MyNavbar;
