import Head from "next/head";
import SlideSection from "../components/SlideSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zachary Greenlief</title>
        <meta
          name="description"
          content="Zachary Greenlief — software developer and founder of Little Lief LLC."
        />
      </Head>

      <SlideSection direction="left">
        <h1>Zachary Greenlief</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/headshot.jpg" alt="Zachary Greenlief" className="headshot" />
        <p>
          I&apos;m a software developer based in the Pittsburgh area, and the founder of{" "}
          <strong>Little Lief LLC</strong>. My path here wasn&apos;t a straight line from a
          computer science degree — it started in hands-on technical work, and software is
          where it landed. (The full career story is on the Resume page.)
        </p>
      </SlideSection>

      <SlideSection direction="right">
        <p>
          I went through a 14-week .NET / full-stack immersive at Tech Elevator, then took it
          further in the Air Force: I served as an Application Developer with the Conjure Unit
          at Scott Air Force Base from 2022 to 2026, building rapid prototypes — from
          applications to full websites — in support of Air Force modernization efforts.
        </p>
        <p>
          I&apos;m now a Software Engineer 3 at <strong>Rise8</strong>, and I still run{" "}
          <strong>Little Lief LLC</strong> on the side, helping small businesses and teams find
          and build the software that actually fits how they work — from process audits through
          full delivery. (More on that on the Business page.)
        </p>
      </SlideSection>

      <SlideSection direction="left">
        <h2>Hobbies</h2>
        <p>
          I play poker — I cashed in the WSOP Big 50 in 2019 — get in a game of Age of Empires II
          with friends when I can, and play hockey with my kids.
        </p>
        <figure className="photo-figure">
          <div className="photo-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/poker-3.jpg" alt="Zachary Greenlief in front of the WSOP sign in Las Vegas" className="photo-row-item" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/poker-2.jpg" alt="Zachary Greenlief holding his chip-count redraw slip at the WSOP Big 50" className="photo-row-item" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/poker-1.jpg" alt="Poker chips on the table during the WSOP Big 50" className="photo-row-item" />
          </div>
          <figcaption className="photo-caption">From the 2019 WSOP Big 50 trip.</figcaption>
        </figure>
      </SlideSection>

      <SlideSection direction="right">
        <h2>Family</h2>
        <figure className="photo-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/family.jpg" alt="Zachary Greenlief with his family" className="family-photo" />
          <figcaption className="photo-caption">
            My wife, Kacie, and our kids, Winona and Zachary Levi.
          </figcaption>
        </figure>
        <figure className="photo-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/jake.jpg" alt="Jake the dog with one of the kids" className="family-photo" />
          <figcaption className="photo-caption">And Jake, our dog.</figcaption>
        </figure>
      </SlideSection>
    </>
  );
}
