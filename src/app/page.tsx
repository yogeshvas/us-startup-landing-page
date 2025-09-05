/** @format */

import HeroHeader from "@/components/custom/header";
import AppHero from "@/components/mvpblocks/app-hero";
import Feature3 from "@/components/mvpblocks/feature-3";
import FooterGlow from "@/components/mvpblocks/footer-glow";
import Logos from "@/components/mvpblocks/sparkles-logo";
import Team1 from "@/components/mvpblocks/team-1";
import React from "react";
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  location?: string;
  socialLinks?: { platform: "github" | "twitter" | "linkedin"; url: string }[];
}
const page = () => {
  const defaultMembers: TeamMember[] = [
    {
      name: "Vishal",
      role: "Founder & CEO",
      bio: "10+ years of experience in product development and team leadership. Passionate about building products that make a difference.",
      imageUrl:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=300&auto=format&fit=crop",
      location: "San Francisco, CA",
      socialLinks: [
        { platform: "twitter", url: "https://twitter.com" },
        { platform: "github", url: "https://github.com" },
        { platform: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      name: "Yogesh Vashisth",
      role: "Co-Founder",
      bio: "Built solutions that helps companies to streamline their operations in South African Market .",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQG0HN80EBjg8g/profile-displayphoto-shrink_800_800/B56ZiP.gSrG0Ac-/0/1754762185140?e=1759968000&v=beta&t=1moF22CSXxN5wSFwdGPgv0YIDMHDf02ZAvSHJP2kA94",
      location: "Delhi, IN",
      socialLinks: [
        { platform: "github", url: "https://github.com/yogeshvas" },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/yogeshvashisth",
        },
      ],
    },
  ];
  return (
    <div>
      <HeroHeader />
      <AppHero />
      <Team1 members={defaultMembers} />
      <Feature3 />
      <Logos />
      <FooterGlow />
    </div>
  );
};

export default page;
