import {
  ArrowRight,
  Play,
  Sparkles,
  Brain,
  GraduationCap,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Star,
  Zap,
  Globe2,
  CreditCard,
  BarChart3,
} from "lucide-react";

export default function Home() {
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
          background: #f7f9fc;
          color: #07152f;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
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
            radial-gradient(
              circle at 85% 5%,
              rgba(47, 101, 255, 0.13),
              transparent 28%
            ),
            radial-gradient(
              circle at 5% 35%,
              rgba(157, 78, 221, 0.08),
              transparent 25%
            ),
            #f7f9fc;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        /* NAVBAR */

        .nav-wrap {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 14px 0;
          background: rgba(247, 249, 252, 0.78);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(7, 21, 47, 0.06);
        }

        .nav {
          height: 68px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(7, 21, 47, 0.08);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 15px 50px rgba(18, 38, 75, 0.08);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: -0.7px;
        }

        .brand-logo {
          width: 39px;
          height: 39px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: white;
          font-weight: 950;
          background:
            linear-gradient(145deg, #0b56ff, #1537d5 55%, #a33cff);
          box-shadow:
            0 8px 22px rgba(27, 78, 255, 0.28),
            inset 0 1px rgba(255, 255, 255, 0.4);
        }

        .brand small {
          display: block;
          margin-top: -3px;
          font-size: 9px;
          color: #71809a;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .links {
          display: flex;
          gap: 30px;
          align-items: center;
          color: #53617a;
          font-size: 14px;
          font-weight: 700;
        }

        .links a:hover {
          color: #1556ff;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .login {
          padding: 11px 15px;
          font-size: 14px;
          font-weight: 800;
          color: #233250;
        }

        .nav-cta {
          border: 0;
          color: white;
          padding: 12px 17px;
          border-radius: 12px;
          font-weight: 800;
          background: #0b56ff;
          box-shadow: 0 8px 22px rgba(11, 86, 255, 0.24);
        }

        /* HERO */

        .hero {
          padding: 88px 0 70px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 55px;
          align-items: center;
        }

        .eyebrow {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          color: #1556ff;
          background: #eaf0ff;
          border: 1px solid #d7e2ff;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.4px;
        }

        .hero h1 {
          max-width: 720px;
          margin: 20px 0 20px;
          font-size: clamp(46px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -4px;
          font-weight: 950;
        }

        .gradient-text {
          background: linear-gradient(
            100deg,
            #0b56ff 0%,
            #4268ff 45%,
            #a23ce8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero p {
          max-width: 630px;
          margin: 0;
          color: #60708b;
          font-size: 18px;
          line-height: 1.75;
        }

        .hero-buttons {
          display: flex;
          gap: 13px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 20px;
          border-radius: 13px;
          color: white;
          background: #0b56ff;
          font-weight: 850;
          box-shadow: 0 14px 30px rgba(11, 86, 255, 0.25);
        }

        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 20px;
          border-radius: 13px;
          color: #182744;
          background: white;
          border: 1px solid #dfe5ef;
          font-weight: 850;
        }

        .hero-note {
          display: flex;
          gap: 18px;
          margin-top: 25px;
          color: #76839a;
          font-size: 12px;
          font-weight: 700;
        }

        /* 3D CARD */

        .visual {
          min-height: 500px;
          position: relative;
          display: grid;
          place-items: center;
          perspective: 1200px;
        }

        .orb {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 35% 28%,
              rgba(255, 255, 255, 0.95),
              rgba(88, 123, 255, 0.72) 22%,
              rgba(22, 73, 255, 0.22) 48%,
              transparent 70%
            );
          filter: blur(2px);
          animation: float 6s ease-in-out infinite;
        }

        .dashboard-card {
          position: relative;
          width: min(455px, 92%);
          min-height: 365px;
          padding: 20px;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.98),
              rgba(237, 243, 255, 0.93)
            );
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            0 35px 80px rgba(28, 52, 105, 0.18),
            0 10px 30px rgba(30, 73, 180, 0.08);
          transform: rotateY(-9deg) rotateX(5deg);
          animation: cardFloat 6s ease-in-out infinite;
        }

        .dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .dash-title {
          font-size: 13px;
          font-weight: 900;
        }

        .live {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #16804a;
          font-size: 10px;
          font-weight: 800;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #18b66a;
          box-shadow: 0 0 0 5px rgba(24, 182, 106, 0.12);
        }

        .progress-box {
          padding: 18px;
          border-radius: 20px;
          background: #09172f;
          color: white;
          box-shadow: 0 18px 35px rgba(6, 20, 47, 0.2);
        }

        .progress-box span {
          color: #9aabc9;
          font-size: 11px;
        }

        .progress-box strong {
          display: block;
          margin-top: 6px;
          font-size: 27px;
        }

        .progress {
          height: 7px;
          margin-top: 17px;
          border-radius: 99px;
          background: #243655;
          overflow: hidden;
        }

        .progress div {
          width: 76%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #2b70ff, #a847ed);
        }

        .dash-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 13px;
        }

        .mini {
          padding: 16px 12px;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #e1e8f3;
        }

        .mini svg {
          color: #1556ff;
        }

        .mini strong {
          display: block;
          margin-top: 10px;
          font-size: 19px;
        }

        .mini span {
          color: #75829a;
          font-size: 10px;
        }

        .floating {
          position: absolute;
          padding: 14px 17px;
          display: flex;
          align-items: center;
          gap: 11px;
          border-radius: 16px;
          background: white;
          border: 1px solid #e5eaf2;
          box-shadow: 0 20px 50px rgba(21, 42, 82, 0.14);
          font-size: 11px;
          font-weight: 850;
        }

        .floating.one {
          top: 75px;
          left: 0;
        }

        .floating.two {
          right: 0;
          bottom: 70px;
        }

        .floating-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #edf3ff;
          color: #1556ff;
        }

        /* TRUST */

        .trust {
          padding: 20px 0 70px;
        }

        .trust-box {
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid #e0e6ef;
          border-bottom: 1px solid #e0e6ef;
        }

        .trust-label {
          color: #8190a8;
          font-size: 12px;
          font-weight: 800;
        }

        .trust-items {
          display: flex;
          gap: 35px;
          color: #33415c;
          font-weight: 900;
          opacity: 0.72;
        }

        /* SECTIONS */

        .section {
          padding: 95px 0;
        }

        .section-head {
          max-width: 700px;
          margin-bottom: 42px;
        }

        .section-head span {
          color: #1556ff;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .section-head h2 {
          margin: 12px 0;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -2.5px;
        }

        .section-head p {
          color: #687791;
          line-height: 1.7;
          font-size: 16px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .feature {
          padding: 28px;
          min-height: 230px;
          border-radius: 24px;
          background: white;
          border: 1px solid #e2e8f1;
          box-shadow: 0 15px 45px rgba(31, 54, 91, 0.05);
          transition: 0.25s ease;
        }

        .feature:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 55px rgba(31, 54, 91, 0.1);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: #edf3ff;
          color: #1556ff;
        }

        .feature h3 {
          margin: 24px 0 8px;
          font-size: 19px;
        }

        .feature p {
          margin: 0;
          color: #728099;
          line-height: 1.6;
          font-size: 14px;
        }

        /* COURSES */

        .courses-section {
          background: #07152f;
          color: white;
          position: relative;
        }

        .courses-section .section-head p {
          color: #9aa9c4;
        }

        .courses-section .section-head span {
          color: #80a4ff;
        }

        .courses {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .course {
          overflow: hidden;
          border-radius: 22px;
          background: #101f3d;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .course-cover {
          height: 185px;
          padding: 22px;
          display: flex;
          align-items: flex-end;
          position: relative;
          background:
            radial-gradient(
              circle at 75% 25%,
              rgba(121, 157, 255, 0.7),
              transparent 30%
            ),
            linear-gradient(135deg, #1556ff, #111d46 70%);
        }

        .course:nth-child(2) .course-cover {
          background:
            radial-gradient(
              circle at 75% 25%,
              rgba(234, 77, 255, 0.65),
              transparent 30%
            ),
            linear-gradient(135deg, #4a27b8, #10182f 75%);
        }

        .course:nth-child(3) .course-cover {
          background:
            radial-gradient(
              circle at 75% 25%,
              rgba(52, 223, 185, 0.6),
              transparent 30%
            ),
            linear-gradient(135deg, #075d72, #101c35 75%);
        }

        .course-cover strong {
          font-size: 24px;
          letter-spacing: -1px;
        }

        .course-content {
          padding: 20px;
        }

        .course-content h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .course-content p {
          margin: 0;
          color: #9aa9c4;
          font-size: 13px;
          line-height: 1.6;
        }

        .course-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 18px;
        }

        .course-price {
          font-weight: 900;
          font-size: 18px;
        }

        .course-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #86a8ff;
          font-size: 12px;
          font-weight: 800;
        }

        /* EARNING */

        .earning {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 55px;
          align-items: center;
        }

        .earning-card {
          padding: 25px;
          border-radius: 26px;
          background: white;
          border: 1px solid #e0e7f0;
          box-shadow: 0 25px 70px rgba(28, 49, 87, 0.09);
        }

        .earning-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #edf0f5;
        }

        .earning-top span {
          color: #77859d;
          font-size: 12px;
        }

        .earning-top strong {
          display: block;
          margin-top: 7px;
          font-size: 30px;
        }

        .verified {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #1556ff;
          font-size: 11px;
          font-weight: 800;
        }

        .earning-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 14px;
        }

        .earning-stat {
          padding: 18px;
          border-radius: 17px;
          background: #f7f9fc;
        }

        .earning-stat span {
          color: #7d8ba2;
          font-size: 11px;
        }

        .earning-stat strong {
          display: block;
          margin-top: 7px;
          font-size: 21px;
        }

        .chart {
          height: 90px;
          display: flex;
          align-items: end;
          gap: 8px;
          margin-top: 18px;
          padding: 12px;
          border-radius: 16px;
          background: #f7f9fc;
        }

        .bar {
          flex: 1;
          border-radius: 7px 7px 2px 2px;
          background: linear-gradient(#1556ff, #8c43e8);
        }

        .bar:nth-child(1) {
          height: 35%;
        }

        .bar:nth-child(2) {
          height: 52%;
        }

        .bar:nth-child(3) {
          height: 45%;
        }

        .bar:nth-child(4) {
          height: 68%;
        }

        .bar:nth-child(5) {
          height: 60%;
        }

        .bar:nth-child(6) {
          height: 82%;
        }

        .bar:nth-child(7) {
          height: 94%;
        }

        .check-list {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .check {
          display: flex;
          gap: 10px;
          color: #52627d;
          font-size: 14px;
          line-height: 1.5;
        }

        .check svg {
          flex: 0 0 auto;
          color: #1556ff;
        }

        /* COMMUNITY */

        .community {
          padding: 80px 0;
        }

        .community-box {
          padding: 55px;
          border-radius: 32px;
          color: white;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(157, 70, 255, 0.55),
              transparent 28%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(24, 99, 255, 0.5),
              transparent 30%
            ),
            #081631;
        }

        .community-box h2 {
          max-width: 680px;
          margin: 0;
          font-size: clamp(35px, 5vw, 57px);
          line-height: 1.03;
          letter-spacing: -2.5px;
        }

        .community-box p {
          max-width: 600px;
          color: #a6b4cd;
          line-height: 1.7;
        }

        .community-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
        }

        .pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #dce5f5;
          font-size: 12px;
          font-weight: 750;
        }

        /* FOOTER */

        footer {
          padding: 55px 0 30px;
          background: white;
          border-top: 1px solid #e3e8f0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr repeat(3, 1fr);
          gap: 40px;
        }

        .footer-title {
          margin-bottom: 14px;
          font-size: 13px;
          font-weight: 900;
        }

        .footer-links {
          display: grid;
          gap: 9px;
          color: #718098;
          font-size: 12px;
        }

        .footer-about {
          max-width: 300px;
          color: #718098;
          line-height: 1.7;
          font-size: 13px;
        }

        .copyright {
          margin-top: 45px;
          padding-top: 20px;
          border-top: 1px solid #edf0f4;
          color: #8a96a9;
          font-size: 11px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: rotateY(-9deg) rotateX(5deg) translateY(0);
          }
          50% {
            transform: rotateY(-5deg) rotateX(3deg) translateY(-12px);
          }
