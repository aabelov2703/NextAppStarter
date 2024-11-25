import Link from "next/link";

const Logo = () => {
  return (
    <Link className="relative mr-5" href="/">
      <div className="bg-primary blur-[1px] rounded-full w-10 h-6" />
      <div className="text-xl font-semibold absolute top-[-2px] left-[6px]">
        <span className="italic text-warning">A</span>
        <span className="italic text-secondary">B</span>
      </div>
    </Link>
  );
};

export default Logo;
