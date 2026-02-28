const NavLink = ({ href, children, onClick, isActive = false }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative text-sm font-medium transition-all duration-300 py-1 ${
      isActive
        ? "text-slate-900 dark:text-white"
        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
    }`}
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </a>
);

export default NavLink;
