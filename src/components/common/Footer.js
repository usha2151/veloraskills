import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <Image
              src="/logo2.png"
              alt="VeloraSkills"
              width={1122}
              height={391}
              className="brand__logo"
            />
          </Link>
          <p>
            Project-based global internship programs with task tracking,
            certificate verification, and career tooling.
          </p>
        </div>
        <div>
          <h2>Platform</h2>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/student/login">Student Portal</Link>
          <Link href="/#verify">Certificate Verification</Link>
        </div>
        <div>
          <h2>Support</h2>
          <Link href="/contact">Contact Us</Link>
          <Link href="/#resources">Learning Material</Link>
          <Link href="/#faq">FAQ</Link>
          <a href="mailto:hello@veloraskills.tech">hello@veloraskills.tech</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>(c) 2026 VeloraSkills. All rights reserved.</span>
        <span>SEO ready, mobile responsive, dark mode friendly.</span>
      </div>
    </footer>
  );
}
