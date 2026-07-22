import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const internshipItems = [
  ["Apply for Internship", "/internships/apply"],
  ["Internship Guidelines", "/internships/guidelines"],
  ["Certificate Verification", "/certificate-verification"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="VeloraSkills home">
          <Image
            src="/logo2.png"
            alt="VeloraSkills"
            width={1122}
            height={391}
            priority
            className="brand__logo"
          />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <div className="nav-dropdown">
            <Link className="nav-dropdown__trigger" href="/internships/apply">
              Internships
              <span aria-hidden="true">v</span>
            </Link>
            <div className="nav-dropdown__menu">
              {internshipItems.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button--small" href="/student/login">
          Student Login
        </Link>
      </div>
    </header>
  );
}
