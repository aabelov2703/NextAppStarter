import Logo from "./nav/logo";

const Footer: React.FC = () => {
  const wrapClass = `w-full flex justify-center bg-dark text-light p-1`;
  const containerClass = `w-full flex justify-between items-center p-1 lg:w-[1024px]`;

  return (
    <footer className={wrapClass}>
      <div className={containerClass}>
        <Logo />
        Space for links +//+ © Footer
      </div>
    </footer>
  );
};

export default Footer;
