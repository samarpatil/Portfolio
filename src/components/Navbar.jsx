function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/60 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-white">
          YourName
        </h1>

        <ul className="flex gap-6 text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;