interface Props {
  onClick: () => void;
  mods: string;
  isOpen?: boolean;
}

export function MenuButton({ onClick: handleClick, mods, isOpen }: Props) {
  return (
    <button
      type="button"
      className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 transition-all duration-300"
      onClick={handleClick}
      aria-label="Toggle mobile menu"
    >
      <span
        className={`w-6 h-0.5 transition-all duration-300 ${mods} ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 transition-all duration-300 ${mods} ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 transition-all duration-300 ${mods} ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
}
