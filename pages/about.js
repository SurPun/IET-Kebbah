import NavBar from "../components/NavBar";
import HeadComp from "../components/HeadComp";
import Link from "next/link";

export default function About() {
  return (
    <>
      <HeadComp title={"About IET"} />

      <NavBar />

      <main className="bg-dim-gray m-7 p-5 rounded-md">
        <h1 className="text-center font-bold pb-5"> About Page</h1>

        <p className="leading-6 pb-3">
          The founder of I.E.T. (immersive empathy training) Kebbah has 20+
          years of youth work experience in and around the borough of
          Wandsworth, coupled with a shared lived experience of some of the
          young people classed as 'hard to reach'. In his current role, the
          young people and Kebbah have come up with an innovative training idea
          aimed at student Police in the form of a virtual reality 360°
          immersive experience, that puts the learner in the shoes of young
          people who face a number of challenges.
        </p>

        <h3 className="pb-3 font-semibold">
          The key problems that this training aim to address are:
        </h3>

        <ul className="leading-6 pb-3">
          <li>Unconscious bias</li>
          <li>Awareness of cultural challenges</li>
          <li>Awareness of mental health challenges</li>
          <li>Awareness of key issues that young people face</li>
        </ul>

        <p className="leading-6 pb-3">
          I.E.T. (immersive empathy training) is unique as it leverages
          technology to simulate a lived experience of a community member
          (teenage black boy), and puts the learner in his shoes, insisting that
          the learner makes decisions in a short-high-pressured time. The
          content for this training has been informed by focus groups with a
          number of young people and student Police, who have expressed their
          key challenges with regard to Police and community relations, in
          particular stop and search.
        </p>

        <h3 className="font-semibold">Contact</h3>
        <Link href="mailto:kebbah@caiushouse.org">
          Email: kebbah@caiushouse.org
        </Link>
        <Link href="tel:+44(0)7723115127">Tel: +44(0)7723-115-127</Link>
      </main>
    </>
  );
}
