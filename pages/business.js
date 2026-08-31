import Head from "next/head";
import SlideSection from "../components/SlideSection";
import { BASE_PATH } from "../lib/basePath";

export default function Business() {
  return (
    <>
      <Head>
        <title>Business — Zachary Greenlief</title>
      </Head>

      <SlideSection direction="left">
        <h1>Little Lief</h1>
        <p>
          I founded <strong>Little Lief LLC</strong>, a West Virginia company, to bring the same
          disciplined, test-first approach I learned building hardware and testing software at
          scale to small businesses and growers who don&apos;t have that in house. It runs as two
          distinct lines of business under one roof.
        </p>
        <p>
          The first is <strong>software and website consulting</strong>: evaluating what a
          business should build, then building it, with delivery models that flex from a one-time
          assessment to full end-to-end ownership. The second is{" "}
          <strong>Little Lief AI</strong>, a smart-hardware product — a modular irrigation control
          system for growers, built from the ground up by me, from circuit board to enclosure.
          Both draw on the same core skill set: hands-on hardware experience, rigorous testing,
          and full-stack software development, just aimed at different problems.
        </p>
      </SlideSection>

      <SlideSection direction="right">
        <h2>Consulting</h2>
        <p>
          I take on software and website consulting for small businesses and enterprise teams,
          structured in two phases so you&apos;re never committing further than you&apos;re ready
          for.
        </p>

        <div className="resume-entry">
          <h3>Phase 1: Discovery &amp; Evaluation</h3>
          <p>
            I come in and audit your business — anywhere from a single department to the whole
            company — for where software can move the needle.
          </p>
          <ul>
            <li>Fixed, low price based on company size.</li>
            <li>
              Deliverable: a high-level roadmap of every place software can improve your
              business, each opportunity with a cost-savings estimate and expected time to
              complete.
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Phase 2: Pick Your Path</h3>
          <p>
            Once Phase 1 is done, you decide what to pursue. Pass on a product and no technical
            document is produced for it — though it can always be purchased later if you change
            your mind. For anything you do pursue, mix and match delivery models product by
            product; every path starts with the same technical document and builds up from
            there:
          </p>

          <div className="resume-entry">
            <h4>Buyout</h4>
            <p>
              The deliverable is a complete technical document that gives your tech team
              everything they need to execute and produce the software themselves.
            </p>
          </div>

          <div className="resume-entry">
            <h4>Part-Time</h4>
            <p>
              You get the same technical document, plus I meet with your team weekly or
              bi-weekly to set priorities, keep development on track, and help manage the team.
            </p>
          </div>

          <div className="resume-entry">
            <h4>Full Execution</h4>
            <p>
              You get the same technical document, and I build the desired software MVP myself,
              handing over the source code — you own everything once it&apos;s complete.
            </p>
          </div>
        </div>

        <p>
          Interested in any of these? <a href="/contact">Get in touch</a> and we can talk through
          what fits.
        </p>
      </SlideSection>

      <SlideSection direction="left">
        <h2>Little Lief AI — Smart Irrigation</h2>
        <p>
          Separately, Little Lief AI builds a modular, WiFi-enabled irrigation control system for
          greenhouse and commercial growers — zone-based, plant-aware watering with a managed
          service for growers who&apos;d rather not think about it once it&apos;s installed.
          It&apos;s currently heading toward a Kickstarter launch.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}/images/irrigation-hardware.jpg`}
          alt="Little Lief AI hardware components — control boards, valves, and enclosures in development"
          className="product-photo"
        />
        <p>Current hardware in development — control boards, valves, and enclosures.</p>
        <p>
          Full details, and updates as the launch gets closer, live at{" "}
          <a href="https://littleliefai.com" target="_blank" rel="noreferrer">
            littleliefai.com
          </a>
          .
        </p>
      </SlideSection>
    </>
  );
}
