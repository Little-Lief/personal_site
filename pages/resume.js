import Head from "next/head";
import SlideSection from "../components/SlideSection";

const SKILL_GROUPS = [
  {
    title: "Software Development",
    skills: [
      "C#",
      ".NET",
      "JavaScript",
      "Angular",
      "Vue.js",
      "Spring Boot",
      "ASP.NET Web API",
      "SQL / PostgreSQL",
      "REST APIs",
      "Git",
      "Agile",
      "TDD",
      "Rapid Prototyping",
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      "Test Planning",
      "System Testing",
      "Unit Testing",
      "Regression Testing",
      "Quality Assurance",
      "Requirements Gathering",
      "Log Triage & Root Cause Analysis",
    ],
  },
  {
    title: "Hardware & Systems",
    skills: [
      "Electrical & Electronics",
      "Control Cabinet Wiring & Testing",
      "Hardware Prototyping",
      "Lidar / Radar Calibration",
    ],
  },
];

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume — Zachary Greenlief</title>
      </Head>

      <SlideSection direction="left">
        <h1>Resume</h1>
        <p>
          Pittsburgh, Pennsylvania ·{" "}
          <a href="mailto:zachary.greenlief@littleliefai.com">zachary.greenlief@littleliefai.com</a>
        </p>
      </SlideSection>

      <SlideSection direction="right">
        <h2>Overview</h2>
        <p>
          My background runs from hardware to software: electrical and test engineering
          (including four and a half years testing self-driving vehicles at Uber ATG), then a
          shift into development through Tech Elevator, the Air Force&apos;s Conjure Unit, and now
          Rise8. That combination — hardware fluency, testing rigor, and production software
          experience — is exactly what powers both sides of <strong>Little Lief</strong>: the
          hardware behind Little Lief AI, and the test-first software I deliver through
          consulting.
        </p>
      </SlideSection>

      <SlideSection direction="left">
        <h2>Experience</h2>

        <div className="resume-entry">
          <h3>Software Engineer 3 — Rise8</h3>
          <p className="meta">Present (started Aug 2026)</p>
        </div>

        <div className="resume-entry">
          <h3>Founder &amp; Consultant — Little Lief LLC</h3>
          <p className="meta">Present</p>
          <ul>
            <li>
              Help small businesses evaluate and build software — process/efficiency roadmaps,
              technical specs, and full delivery.
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Application Developer, Conjure Unit — U.S. Air Force</h3>
          <p className="meta">Scott Air Force Base, IL · 2022 – 2026</p>
          <ul>
            <li>
              Developed rapid prototypes — from applications to websites — in support of Air
              Force modernization efforts.
            </li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Mission Specialist, Structured Test Team — Uber Advanced Technologies Group</h3>
          <p className="meta">Pittsburgh, PA · Aug 2016 – Jan 2021 (4 yrs 6 mos)</p>
          <ul>
            <li>
              Developed and executed test plans for self-driving vehicles, measuring the
              performance of existing and new features and documenting overall vehicle behavior.
            </li>
            <li>
              Triaged logs to identify root causes and delivered detailed reports on self-driving
              feature performance to system developers to help find bugs and rework code changes.
            </li>
            <li>
              Analyzed data from active drivers to re-create real-world events, calibrating
              vehicles and lidar/radar systems to confirm readiness for road testing/operations.
            </li>
            <li>
              Key contributor to a logical process for self-driving vehicle assessment, deploying
              testing standards and safety procedures.
            </li>
            <li>Trained new hires on the Structured Test Team in processes, protocols, and safety guidelines.</li>
            <li>Promoted from vehicle operator to mission specialist (test team) within two months of joining.</li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Test Engineer | Assembler — GE</h3>
          <p className="meta">Pittsburgh, PA · Jun 2015 – Aug 2016 (1 yr 3 mos)</p>
          <ul>
            <li>
              Led and trained 4 assemblers, tracking individual progress against assembly task
              requirements.
            </li>
            <li>Promoted from Lead Assembler to Test Engineer within 5 months; served as back-up night-shift Lead Test Engineer.</li>
            <li>Served as Quality Assurance champion, verifying subassemblies against specs and build requirements.</li>
            <li>Identified assembly-line pain points and implemented tooling to improve efficiency and production speed.</li>
            <li>Troubleshot unit wiring and subassembly issues and documented findings to drive continuous improvement.</li>
          </ul>
        </div>

        <div className="resume-entry">
          <h3>Electrical Technician — System One</h3>
          <p className="meta">Cranberry Twp, PA · Oct 2013 – Dec 2014 (1 yr 3 mos)</p>
          <ul>
            <li>Assembled and reworked items against Work to Production Orders.</li>
            <li>
              Executed end-to-end control cabinet testing: built sub-assemblies to drawings,
              installed and wired them into control cabinets, and prepped cabinet wiring for
              testing.
            </li>
            <li>Adjusted incorrect or broken hardware and wiring to quality standards.</li>
          </ul>
        </div>
      </SlideSection>

      <SlideSection direction="left">
        <h2>Education</h2>

        <div className="resume-entry">
          <h3>Western Governors University</h3>
          <p className="meta">B.S., Software Development · In progress — two courses and a capstone remaining</p>
        </div>

        <div className="resume-entry">
          <h3>Community College of the Air Force</h3>
          <p className="meta">Associate&apos;s Degree, Computer Science</p>
        </div>

        <div className="resume-entry">
          <h3>Tech Elevator — .NET / C# Full-Stack Immersive</h3>
          <p className="meta">Jan 2021 – Apr 2021 (14 weeks)</p>
          <p>
            Object-oriented programming (C#, .NET); web application development (HTML, CSS,
            JavaScript, Vue.js, ASP.NET Web API); database programming (ADO.NET, SQL, MS SQL,
            E/R diagrams); Agile, TDD, unit &amp; integration testing, Git.
          </p>
        </div>

        <div className="resume-entry">
          <h3>Pittsburgh Technical College</h3>
          <p className="meta">Associate&apos;s Degree, Electrical and Electronics Engineering · 2012 – 2013</p>
        </div>
      </SlideSection>

      <SlideSection direction="right">
        <h2>Skills</h2>
        {SKILL_GROUPS.map((group) => (
          <div className="resume-entry" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="skills-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </SlideSection>
    </>
  );
}
