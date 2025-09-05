/** @format */

import {
  Workflow,
  Target,
  Rocket,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: "left" | "right";
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Workflow,
    title: "Automated Workflows",
    description:
      "Eliminate bottlenecks with seamless automation, ensuring teams get what they need, when they need it.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Target,
    title: "Unified Operations",
    description:
      "Streamline processes and align your team towards a single, unified goal with our SaaS solution.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: Rocket,
    title: "Scalable Team Culture",
    description:
      "Foster a resilient, agile team culture with continuous improvement embedded in daily operations.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: ShieldCheck,
    title: "Shift-Left Integration",
    description:
      "Embed early testing, quality, and security checks to detect issues faster and deliver high-quality software.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-sm",
          "bg-black border border-purple-800/30 backdrop-blur-sm",
          feature.cornerStyle
        )}
      >
        <div className="text-indigo-400 mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-white mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-gray-400 text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-indigo-400/0 via-indigo-400 to-indigo-400/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--indigo-500)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section className="pt-40 bg-black" id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="bg-black/80 text-white border border-purple-500/30 relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm backdrop-blur-sm">
              <span className="relative z-1 flex items-center gap-2">
                Features
              </span>
              <span className="from-indigo-400/0 via-indigo-400 to-indigo-400/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--indigo-500)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="text-white mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem]">
              Key Benefits of Streamline
            </h2>
            <p className="text-gray-400 mx-auto max-w-[18rem] text-center text-pretty">
              Transform your operations with automation, agility, and quality,
              driving your team to success.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
