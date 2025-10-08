const NavLink = ({ href, children, onClick, isActive = false }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-green-400 hover:text-green-300 transition-all duration-300 font-medium nav-link-glow relative ${
      isActive ? "text-green-300" : ""
    }`}
  >
    {children}
    {isActive && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 nav-underline"></div>
    )}
  </a>
);

export default NavLink;