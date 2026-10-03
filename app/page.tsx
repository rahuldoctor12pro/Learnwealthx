"use client";

import { useState } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import Hero3D from "./components/Hero3D";

const courses = [
  {
    title: "AI Mastery",
    description: "Learn practical AI tools and workflows from beginner to advanced.",
    icon: Brain,
    tag: "Most Popular",
  },
  {
    title: "AI Content Creation",
    description: "Create professional content, graphics and videos using AI.",
    icon: Sparkles,
    tag: "Trending",
  },
  {
    title: "AI Earning Skills",
    description: "Learn digital skills that can be used to build online income streams.",
    icon: CircleDollarSign,
    tag: "New",
  },
];

const features = [
  "Premium AI skill courses",
  "Practical projects and assignments",
  "Personal learner dashboard",
  "Affiliate earning dashboard",
  "Digital membership card",
  "AI-powered learning community",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-500/25">
              LX
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                Learnwealth<span className="text-blue-600">x</span>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Learn • Grow • Earn
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Home
            </a>
            <a href="#courses" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Courses
            </a>
            <a href="#features" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Features
            </a>
            <a href="#community" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Community
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100">
              Login
            </button>
            <button className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
              <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
              <button className="rounded-xl bg-slate-950 px-5 py-3 font-bold text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.10),transparent_25%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <Sparkles size={16} />
              The Future of AI Learning
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Learn AI.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
                Grow Faster.
              </span>
              <br />
              Earn Smarter.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Learnwealthx is building a premium learning and community platform
              designed to help people learn modern AI skills and turn knowledge
              into real-world opportunities.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">
                Explore Courses
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-800 shadow-sm hover:border-blue-300">
                <Play size={17} fill="currentColor" />
                See How It Works
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" size={18} />
                Practical Learning
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" size={18} />
                Premium Courses
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" size={18} />
                Community
              </span>
            </div>
          </div>

          <div className="relative h-[480px] lg:h-[650px]">
            <Hero3D />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">
          {[
            ["AI Skills", "Learn modern skills"],
            ["Courses", "Practical education"],
            ["Community", "Connect & grow"],
            ["Earning", "Build opportunities"],
          ].map(([number, label]) => (
            <div key={number} className="px-5 py-8 text-center">
              <div className="text-xl font-black text-slate-950">{number}</div>
              <div className="mt-1 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
            Learn
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Build skills that matter.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Premium courses designed around practical AI skills and modern
            digital workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article
                key={course.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl transition group-hover:bg-pink-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={28} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {course.tag}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-black">{course.title}</h3>

                  <p className="mt-3 min-h-20 leading-7 text-slate-600">
                    {course.description}
                  </p>

                  <button className="mt-7 flex items-center gap-2 font-bold text-blue-600">
                    View Course
                    <ChevronRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">
              One Platform
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Everything you need to
              <span className="text-blue-400"> learn & grow.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Learnwealthx combines education, community, profiles and future
              earning tools into one connected experience.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 hover:bg-blue-50">
              Explore Platform
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  {index === 0 ? (
                    <Brain size={20} />
                  ) : index === 1 ? (
                    <Zap size={20} />
                  ) : index === 2 ? (
                    <Users size={20} />
                  ) : index === 3 ? (
                    <CircleDollarSign size={20} />
                  ) : index === 4 ? (
                    <ShieldCheck size={20} />
                  ) : (
                    <Sparkles size={20} />
                  )}
                </div>

                <div className="font-bold">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-600 p-8 text-white sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-100">
                <Users size={18} />
                LEARNWEALTHX COMMUNITY
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Learn together.
                <br />
                Grow together.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">
                A social learning experience where members can build profiles,
                share their journey, connect with others and discover new
                opportunities.
              </p>

              <button className="mt-8 rounded-2xl bg-white px-7 py-4 font-black text-slate-950 shadow-xl">
                Join Learnwealthx
              </button>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-md rounded-3xl border border-white/30 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/20" />
                  <div>
                    <div className="font-black">Learnwealthx Member</div>
                    <div className="text-sm text-blue-100">Verified Profile</div>
                  </div>
                  <div className="ml-auto rounded-full bg-white/20 p-2">
                    <CheckCircle2 size={18} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-xl font-black">12</div>
                    <div className="text-xs text-blue-100">Courses</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-xl font-black">48</div>
                    <div className="text-xs text-blue-100">Followers</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-xl font-black">LX</div>
                    <div className="text-xs text-blue-100">Member</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <div>
      <div className="text-xl font-black">
        Learnwealth<span className="text-blue-600">x</span>
      </div>

      <div className="mt-1 text-sm text-slate-500">
        Learn • Grow • Earn
      </div>
    </div>

    <div className="text-sm text-slate-500">
      © 2026 Learnwealthx. All rights reserved.
    </div>
  </div>
</footer>
    </main>
