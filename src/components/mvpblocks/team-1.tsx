/** @format */

"use client";

import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  location?: string;
  socialLinks?: { platform: "github" | "twitter" | "linkedin"; url: string }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  className?: string;
}

// Default data
const defaultMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    bio: "Alice specializes in building beautiful and performant user interfaces.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "San Francisco, CA",
    socialLinks: [
      { platform: "github", url: "https://github.com/alicejohnson" },
      { platform: "twitter", url: "https://twitter.com/alicejohnson" },
      { platform: "linkedin", url: "https://linkedin.com/in/alicejohnson" },
    ],
  },
  {
    name: "Bob Smith",
    role: "Backend Developer",
    bio: "Bob loves designing scalable backend systems and APIs.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "New York, NY",
    socialLinks: [
      { platform: "github", url: "https://github.com/bobsmith" },
      { platform: "linkedin", url: "https://linkedin.com/in/bobsmith" },
    ],
  },
  {
    name: "Carol Lee",
    role: "Product Manager",
    bio: "Carol ensures our products meet user needs and business goals.",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "London, UK",
    socialLinks: [
      { platform: "twitter", url: "https://twitter.com/carollee" },
      { platform: "linkedin", url: "https://linkedin.com/in/carollee" },
    ],
  },
];

// Animation for glow spots

export default function Team1({
  title = "Meet Our Team",
  subtitle = "We're a diverse group of passionate individuals working together to build amazing products.",
  members = defaultMembers,
  className,
}: TeamProps) {
  return (
    <section
      className={cn(
        "relative mx-auto  py-16 md:py-24 bg-black overflow-hidden",
        className
      )}
    >
      {/* Background effects */}

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="text-gray-400 mx-auto max-w-2xl md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Team member card component
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group bg-black/80 h-[420px] w-96 overflow-hidden rounded-xl border border-purple-500/30 backdrop-blur-sm shadow-sm transition-opacity hover:opacity-75">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex h-[220px] flex-col p-5">
        {member.location && (
          <div className="text-gray-400 mb-1 flex items-center text-xs">
            <div className="bg-indigo-400 mr-1.5 h-1.5 w-1.5 rounded-full" />
            {member.location}
          </div>
        )}

        <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
        <p className="text-indigo-400 mb-2 text-sm font-medium">
          {member.role}
        </p>
        <div className="mb-4">
          <p className="text-gray-400 text-sm">{member.bio}</p>
        </div>
        <div className="mt-auto">
          {member.socialLinks && (
            <div className="flex space-x-3">
              {member.socialLinks.map((link) => (
                <Link
                  prefetch={false}
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/60 text-gray-400 hover:bg-indigo-500/30 hover:text-indigo-200 flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 transition-all"
                >
                  {link.platform === "github" && (
                    <GithubIcon className="h-4 w-4" />
                  )}
                  {link.platform === "twitter" && (
                    <TwitterIcon className="h-4 w-4" />
                  )}
                  {link.platform === "linkedin" && (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
