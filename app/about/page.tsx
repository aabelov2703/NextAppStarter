import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div>About page</div>
      <Link href="/" className="rounded-full">
        Go back
      </Link>
    </section>
  );
};

export default About;
