"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import {
  FiBriefcase,
  FiChevronDown,
  FiGrid,
  FiHome,
  FiInfo,
  FiLogIn,
  FiMail,
  FiPenTool,
} from "react-icons/fi";

const navItems = [
  ["About", "/about", FiInfo],
  ["Services", "/services", FiGrid],
  ["Blog", "/blog", FiPenTool],
  ["Contact", "/contact", FiMail],
];

const internshipItems = [
  ["Apply for Internship", "/internships/apply"],
  ["Internship Guidelines", "/internships/guidelines"],
  ["Certificate Verification", "/certificate-verification"],
];

export function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".site-header__inner > *",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
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
          <Link href="/">
            <FiHome aria-hidden="true" />
            <span>Home</span>
          </Link>
          <div className="nav-dropdown">
            <Link className="nav-dropdown__trigger" href="/internships/apply">
              <FiBriefcase aria-hidden="true" />
              Internships
              <FiChevronDown aria-hidden="true" />
            </Link>
            <div className="nav-dropdown__menu">
              {internshipItems.map(([label, href]) => (
                <Link href={href} key={label}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map(([label, href, Icon]) => (
            <Link href={href} key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <Link className="button button--small" href="/student/login">
          <FiLogIn aria-hidden="true" />
          <span>Student Login</span>
        </Link>
      </div>
    </header>
  );
}
