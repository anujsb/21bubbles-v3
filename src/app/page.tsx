"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { PricingToggle } from "@/components/PricingToggle";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AddOnServices } from "@/components/AddOnServices";

const websitePlans = [
  {
    title: "Static Single Page",
    price: 10000,
    features: [
      "Hero section",
      "About Us section",
      "Products/Services showcase",
      "Contact form",
      "Footer",
      "Responsive design",
    ],
  },
  {
    title: "Static Multi-Page",
    price: 20000,
    features: [
      "4-5 distinct pages",
      "Customized routes",
      "Navigation menu",
      "Fully responsive",
      "SEO-friendly",
    ],
  },
  {
    title: "3D Animated Single Page",
    price: 30000,
    features: [
      "Full-page 3D effects",
      "Interactive designs",
      "High-performance optimization",
      "Modern and captivating",
    ],
  },
  {
    title: "3D Animated Multi-Page",
    price: 35000,
    features: [
      "4-5 fully animated pages",
      "Smooth interactions",
      "Page transitions",
      "Desktop and mobile optimized",
    ],
  },
];

const softwarePlans = [
  {
    title: "Basic Software Application",
    price: 45000,
    features: [
      "Up to 2 user roles",
      "Core functionality",
      "Secure backend",
      "Intuitive user interface",
    ],
  },
  {
    title: "Monthly Retainer",
    price: 40000,
    features: [
      "Ongoing development",
      "New feature development",
      "Regular updates",
      "Scalable architecture",
    ],
  },
];

export default function Home() {
  const [showWebsitePlans, setShowWebsitePlans] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Pricing Plans
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Choose the perfect plan for your project needs
        </p>
      </motion.div>

      <div className="mt-12 flex justify-center">
        <PricingToggle
          showWebsitePlans={showWebsitePlans}
          setShowWebsitePlans={setShowWebsitePlans}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-4 items-center justify-center"
      >
        {(showWebsitePlans ? websitePlans : softwarePlans).map(
          (plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard {...plan} />
            </motion.div>
          )
        )}
      </motion.div>
      <AddOnServices />
      <WhyChooseUs />
    </div>
  );
}
