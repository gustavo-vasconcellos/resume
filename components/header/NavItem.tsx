interface Props {
  name: string;
  href: string;
  showing?: boolean;
  index: number;
  cb?: () => void;
}

export function NavItem({ name, href, showing: isShowing, index, cb }: Props) {
  return (
    <a
      key={name}
      href={href}
      className={`block py-2 px-4 transition-all duration-300 rounded-lg hover:text-primary hover:bg-primary/10 hover:translate-x-2 ${
        isShowing ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
      } 
      
      md:transition-all md:duration-300 md:relative md:group md:opacity-0 md:animate-fade-in-up md:hover:-translate-y-0.5 md:hover:text-primary
      `}
      style={{
        transitionDelay: isShowing ? `${index * 100}ms` : "0ms",
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
      onClick={(e) => {
        e.preventDefault();
        cb?.();
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 300);
      }}
    >
      {name}
      <span className="md:block hidden absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
