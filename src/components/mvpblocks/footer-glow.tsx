/** @format */

"use client";

export default function FooterGlow() {
  return (
    <footer className="relative z-10 w-full overflow-hidden pt-12 pb-6 bg-black">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(
            circle,
            #ffffff0d 0%,
            #6366f14d 60%,
            #1e1b4b 100%
          );
          border: 1px solid #6366f11a;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          display: flex;
        }
        .glass:where(.dark, .dark *) {
          display: flex;
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(
            circle,
            #ffffff1a 0%,
            #1e1b4b4d 60%,
            #2a0e3a 100%
          ) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 12px !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>

      <div className="glass relative mx-auto flex w-full max-w-[90%] flex-col items-center gap-6 rounded-2xl px-4 py-8 sm:max-w-[85%] sm:px-6 sm:py-10 md:max-w-6xl md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-700 text-xl font-extrabold text-white shadow-md sm:h-9 sm:w-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </span>
            <span className="bg-gradient-to-br from-purple-200 to-indigo-500 bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl">
              Averon
            </span>
          </a>
          <p className="text-slate-300 mb-4 max-w-[16rem] text-center text-xs sm:max-w-xs sm:text-sm md:text-left">
            Averon empowers teams with automated workflows, unified operations,
            and shift-left integration to deliver high-quality software faster.
          </p>
          <div className="mt-2 flex gap-3 text-purple-400">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-slate-200 transition"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.605-11.604 11.605A11.561 11.561 0 010 18.29c.373.044.734.074 1.12.074a8.189 8.189 0 005.065-1.737 4.102 4.102 0 01-3.834-2.85c.25.04.5.065.765.065.37 0 .734-.049 1.08-.147A4.092 4.092 0 01.8 8.582v-.05a4.119 4.119 0 001.853.522A4.099 4.099 0 01.812 5.847c0-.02 0-.042.002-.062a11.653 11.653 0 008.457 4.287A4.62 4.62 0 0122 5.924a8.215 8.215 0 002.018-.559 4.108 4.108 0 01-1.803 2.268 8.233 8.233 0 002.368-.648 8.897 8.897 0 01-2.062 2.112z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-slate-200 transition"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .29a12 12 0 00-3.797 23.401c.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.495.999.106-.775.418-1.307.76-1.608-2.665-.301-5.466-1.332-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23a11.502 11.502 0 016.002 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.805 5.629-5.476 5.925.429.369.813 1.096.813 2.211v3.285c0 .32.217.694.825.576A12 12 0 0012 .29"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-slate-200 transition"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.450-1.492-2.450-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z" />
              </svg>
            </a>
          </div>
        </div>
        <nav className="flex w-full flex-col gap-6 text-center sm:gap-8 md:w-auto md:flex-row md:justify-end md:gap-10 md:text-left">
          <div>
            <div className="mb-2 text-[0.65rem] font-semibold tracking-widest text-white uppercase sm:mb-3 sm:text-xs">
              Product
            </div>
            <ul className="space-y-1 text-[0.8rem] sm:space-y-2 sm:text-sm">
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-[0.65rem] font-semibold tracking-widest text-white uppercase sm:mb-3 sm:text-xs">
              Company
            </div>
            <ul className="space-y-1 text-[0.8rem] sm:space-y-2 sm:text-sm">
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-[0.65rem] font-semibold tracking-widest text-white uppercase sm:mb-3 sm:text-xs">
              Resources
            </div>
            <ul className="space-y-1 text-[0.8rem] sm:space-y-2 sm:text-sm">
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300/70 hover:text-slate-200">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-slate-300 relative z-10 mt-8 text-center text-[0.65rem] sm:mt-10 sm:text-xs">
        <span>&copy; 2025 Streamline. All rights reserved.</span>
      </div>
    </footer>
  );
}
