import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <Link href="/" className="brand">
            Zachary Greenlief
          </Link>
          <div className="nav-links">
            <Link href="/">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/business">Business</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Zachary Greenlief ·{" "}
          <a href="mailto:zachary.greenlief@littleliefai.com">zachary.greenlief@littleliefai.com</a>
        </p>
      </footer>
    </>
  );
}
