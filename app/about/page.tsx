import Link from "next/link";

const About: React.FC = () => {
  return (
    <article className="flex flex-col items-center">
      <div>About page</div>
      <Link href="/" className="rounded-full">
        Go back
      </Link>
    </article>
  );
};

export default About;
