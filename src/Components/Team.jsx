import React from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#050505] to-black text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="flex items-center justify-between px-8 md:px-16 py-5">
          <div className="flex items-center gap-2 text-2xl font-semibold">
            🧠 <span className="tracking-wide">Codame</span>
          </div>

          <nav className="flex gap-8 text-sm tracking-widest">
            <a className="hover:text-cyan-400 transition" href="#">EVENTS</a>

            <a className="relative text-cyan-400" href="#">
              ABOUT
              <span className="absolute -bottom-2 left-0 w-full h-px bg-cyan-400" />
            </a>

            <a className="hover:text-cyan-400 transition" href="#">CONTACT</a>
          </nav>

          <div className="text-xl cursor-pointer opacity-80 hover:opacity-100">
            🌙
          </div>
        </div>
      </header>

      {/* HERO / ABOUT */}
      <section className="px-8 md:px-20 lg:px-32 pt-24 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Welcome to{" "}
          <span className="text-cyan-400">Xploit</span>, the pioneering coding club
          at <span className="text-cyan-400">IIIT Bhopal</span>.
        </h1>

        <div className="w-24 h-1 bg-cyan-400 mt-8 mb-10 rounded-full" />

        <p className="text-xl md:text-2xl leading-relaxed text-white/90">
          Founded in <span className="text-cyan-400">2018</span>, Codame exists to
          nurture a thriving coding culture among students through hands-on
          learning and collaboration.
        </p>

        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-white/80">
          We host{" "}
          <span className="text-cyan-400">
            coding contests, hackathons, and expert-led tech sessions
          </span>{" "}
          to help students sharpen skills, learn faster, and build meaningful
          connections.
        </p>

        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-white/80">
          Join a supportive community where curiosity is celebrated and growth
          is inevitable.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className="mt-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Meet the <span className="text-cyan-400">Team</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            The passionate minds driving Codame forward.
          </p>
        </div>

        <div className="relative h-full">
          <ChromaGrid
            items={items}
            radius={320}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>

      {/* FOOTER SPACER */}
      <div className="h-32" />
    </div>
  );
};

export default Team;
