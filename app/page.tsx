"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #f7faff;
          color: #0b1220;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 85% 8%, rgba(37, 99, 235, 0.14), transparent 28%),
            radial-gradient(circle at 5% 30%, rgba(236, 72, 153, 0.08), transparent 24%),
            #f8fbff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* NAVBAR */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.07);
        }

        .nav-inner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: -0.5px;
        }

        .logo {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          color: white;
          font-weight: 950;
          font-size: 17px;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.28);
        }

        .brand span {
          color: #2563eb;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          color: #475569;
          font-size: 14px;
          font-weight: 700;
        }

        .nav-links a:hover {
          color: #2563eb;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn {
          border: 0;
          cursor: pointer;
          border-radius: 12px;
          padding: 12px 18px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-light {
          background: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
        }

        .btn-primary {
          color: white;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.25);
        }

        .menu-btn {
          display: none;
          background: white;
          border: 1px solid #e2e8f0;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 20px;
        }

        /* HERO */

        .hero {
          padding: 86px 0 70px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 60px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.1);
        }

        .hero h1 {
          margin: 0;
          max-width: 700px;
          font-size: clamp(46px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -4px;
          font-weight: 950;
        }

        .gradient-text {
          background: linear-gradient(90deg, #2563eb, #7c3aed, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero p {
          max-width: 620px;
          margin: 25px 0 30px;
          color: #64748b;
          font-size: 18px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-note {
          margin-top: 18px;
          color: #94a3b8;
          font-size: 13px;
        }

        /* HERO VISUAL */

        .visual-wrap {
          position: relative;
          min-height: 480px;
          display: grid;
          place-items: center;
        }

        .glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(37, 99, 235, 0.22),
            rgba(124, 58, 237, 0.08),
            transparent 68%
          );
          filter: blur(12px);
        }

        .dashboard {
          width: min(520px, 100%);
          position: relative;
          z-index: 2;
          border-radius: 28px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.25);
          box-shadow:
            0 40px 100px rgba(15, 23, 42, 0.16),
            0 10px 30px rgba(37, 99, 235, 0.08);
          transform: perspective(1100px) rotateY(-8deg) rotateX(4deg);
        }

        .dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 5px 18px;
        }

        .dash-title {
          font-weight: 900;
          font-size: 15px;
        }

        .mini-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #ec4899);
        }

        .balance {
          border-radius: 22px;
          padding: 25px;
          color: white;
          background:
            radial-gradient(circle at 80% 10%, rgba(255,255,255,.28), transparent 30%),
            linear-gradient(135deg, #0f172a, #1e40af);
        }

        .balance small {
          opacity: 0.7;
          font-size: 12px;
        }

        .balance h3 {
          font-size: 34px;
          margin: 7px 0;
        }

        .positive {
          color: #86efac;
          font-size: 13px;
          font-weight: 800;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 13px;
        }

        .stat {
          padding: 18px 14px;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .stat strong {
          display: block;
          font-size: 19px;
          margin-bottom: 5px;
        }

        .stat span {
          color: #64748b;
          font-size: 11px;
        }

        .progress {
          margin-top: 13px;
          padding: 18px;
          border-radius: 18px;
          background: #eff6ff;
        }

        .progress-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 9px;
        }

        .bar {
          height: 8px;
          background: #dbeafe;
          border-radius: 999px;
          overflow: hidden;
        }

        .bar span {
          display: block;
          width: 72%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #2563eb, #06b6d4);
        }

        .floating-card {
          position: absolute;
          z-index: 5;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 14px 17px;
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.14);
          font-size: 12px;
          font-weight: 800;
        }

        .floating-one {
          left: 0;
          top: 100px;
        }

        .floating-two {
          right: -8px;
          bottom: 80px;
        }

        /* SECTIONS */

        .section {
          padding: 90px 0;
        }

        .section-head {
          max-width: 720px;
          margin-bottom: 38px;
        }

        .eyebrow {
          color: #2563eb;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }

        .section h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .section-head p {
          color: #64748b;
          line-height: 1.7;
          margin-top: 14px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          transition: 0.25s ease;
        }

        .feature:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.09);
        }

        .icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 23px;
          margin-bottom: 20px;
        }

        .feature h3 {
          margin: 0 0 10px;
          font-size: 19px;
        }

        .feature p {
          color: #64748b;
          line-height: 1.65;
          font-size: 14px;
          margin: 0;
        }

        /* COURSES */

        .courses {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .course {
          overflow: hidden;
          border-radius: 24px;
          background: white;
          border: 1px solid #e2e8f0;
        }

        .course-image {
          height: 180px;
          position: relative;
          padding: 22px;
          display: flex;
          align-items: flex-end;
          background:
            radial-gradient(circle at 80% 20%, rgba(255,255,255,.28), transparent 25%),
            linear-gradient(135deg, #0f172a, #2563eb);
          color: white;
        }

        .course:nth-child(2) .course-image {
          background: linear-gradient(135deg, #111827, #7c3aed);
        }

        .course:nth-child(3) .course-image {
          background: linear-gradient(135deg, #0f172a, #db2777);
        }

        .course-number {
          position: absolute;
          top: 18px;
          right: 18px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.15);
          backdrop-filter: blur(10px);
          font-size: 11px;
        }

        .course-image strong {
          font-size: 23px;
          max-width: 230px;
        }

        .course-body {
          padding: 22px;
        }

        .course-body p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }

        .course-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 18px;
        }

        .price {
          font-size: 19px;
          font-weight: 900;
        }

        .small-btn {
          border: 0;
          border-radius: 10px;
          padding: 9px 13px;
          background: #eff6ff;
          color: #2563eb;
          font-weight: 800;
          cursor: pointer;
        }

        /* COMMUNITY */

        .community {
          border-radius: 34px;
          padding: 55px;
          color: white;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 80% 20%, rgba(59,130,246,.5), transparent 25%),
            linear-gradient(135deg, #020617, #172554 60%, #312e81);
        }

        .community-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .community h2 {
          font-size: clamp(34px, 4vw, 52px);
          margin: 0;
          letter-spacing: -2px;
        }

        .community p {
          color: #cbd5e1;
          line-height: 1.7;
          max-width: 580px;
        }

        .social-card {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.12);
          backdrop-filter: blur(14px);
        }

        .social-line {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .social-line:last-child {
          border-bottom: 0;
        }

        .social-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #a855f7);
        }

        .social-line div:last-child {
          font-size: 13px;
        }

        /* FOOTER */

        footer {
          padding: 40px 0;
          margin-top: 30px;
          border-top: 1px solid #e2e8f0;
          background: white;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
        }

        .footer-copy {
          color: #64748b;
          font-size: 13px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
          color: #64748b;
          font-size: 13px;
        }

        /* MOBILE */

        @media (max-width: 900px) {
          .hero-grid,
          .community-grid {
            grid-template-columns: 1fr;
          }

          .features,
          .courses {
            grid-template-columns: repeat(2, 1fr);
          }

          .nav-links {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .nav-actions {
            display: none;
          }

          .hero {
            padding-top: 55px;
          }

          .visual-wrap {
            min-height: 430px;
          }
        }

        @media (max-width: 620px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .features,
          .courses {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            letter-spacing: -2px;
            font-size: 48px;
          }

          .hero p {
            font-size: 16px;
          }

          .stat-grid {
            grid-template-columns: 1fr;
          }

          .dashboard {
            transform: none;
          }

          .floating-one {
            left: -4px;
            top: 70px;
          }

          .floating-two {
            right: -4px;
            bottom: 45px;
          }

          .community {
            padding: 30px 22px;
            border-radius: 25px;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <div className="logo">LX</div>
            Learn<span>wealthx</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#features">Features</a>
            <a href="#community">Community</a>
          </nav>

          <div className="nav-actions">
            <button className="btn btn-light">Log in</button>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div
            style={{
              padding: "15px 20px 20px",
              background: "white",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <div className="container" style={{ display: "grid", gap: 14 }}>
              <a href="#home">Home</a>
              <a href="#courses">Courses</a>
              <a href="#features">Features</a>
              <a href="#community">Community</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="badge">
              <span className="badge-dot"></span>
              AI Skills • Digital Learning • Community
            </div>

            <h1>
              Learn smarter.
              <br />
              <span className="gradient-text">Grow faster.</span>
              <br />
              Earn better.
            </h1>

            <p>
              Learnwealthx is building a modern learning ecosystem where
              people can learn practical AI skills, build their digital
              capabilities and connect with a growing community.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Courses →</button>
              <button className="btn btn-light">See How It Works</button>
            </div>

            <div className="hero-note">
              Practical learning • Premium courses • Community • Growth
            </div>
          </div>

          <div className="visual-wrap">
            <div className="glow"></div>

            <div className="floating-card floating-one">
              🚀 AI Skills
              <br />
              <span style={{ color: "#2563eb" }}>Learn & Build</span>
            </div>

            <div className="dashboard">
              <div className="dash-top">
                <div className="dash-title">Learnwealthx Dashboard</div>
                <div className="mini-avatar"></div>
              </div>

              <div className="balance">
                <small>Learning Progress</small>
                <h3>72%</h3>
                <div className="positive">↑ Keep going</div>
              </div>

              <div className="stat-grid">
                <div className="stat">
                  <strong>12</strong>
                  <span>Courses</span>
                </div>

                <div className="stat">
                  <strong>48</strong>
                  <span>Followers</span>
                </div>

                <div className="stat">
                  <strong>LX</strong>
                  <span>Member</span>
                </div>
              </div>

              <div className="progress">
                <div className="progress-row">
                  <span>AI Mastery</span>
                  <span>72%</span>
                </div>

                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>

            <div className="floating-card floating-two">
              ✦ Community
              <br />
              <span style={{ color: "#7c3aed" }}>Connect • Learn • Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section
