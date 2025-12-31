const Footer = () => {
  return (
    <>
      <footer className="font-thin p-5 bg-slate-900 text-white text-center flex flex-col justify-between gap-3">
        <div>&copy; 2025 Copyright - All Rights Reserved</div>
        <div
          onClick={() => window.open("https://www.aryananand.me/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          Aryan Anand
        </div>
      </footer>
    </>
  );
};

export default Footer;
