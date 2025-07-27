import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { teamData } from '../data/teamData';

const ANIMATION_STEPS = 100;
const ANIMATION_DURATION = 2000;
const INTERVAL_DELAY = ANIMATION_DURATION / ANIMATION_STEPS;

const Team = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0,
  });

  useEffect(() => {
    const animateCounters = () => {
      let step = 0;
      const increments = Object.fromEntries(
        Object.entries(teamData.stats).map(([key, value]) => [key, value / ANIMATION_STEPS])
      );

      const interval = setInterval(() => {
        step++;
        setCounters(prev => {
          const updated = {};
          for (const key in increments) {
            updated[key] = Math.min(Math.ceil(step * increments[key]), teamData.stats[key]);
          }
          return updated;
        });
        if (step >= ANIMATION_STEPS) clearInterval(interval);
      }, INTERVAL_DELAY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && animateCounters(),
      { threshold: 0.1 }
    );

    const section = document.getElementById("team");
    section && observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  const variants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
    cardHover: {
      hover: {
        y: -10,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      },
    },
    avatarHover: {
      hover: {
        scale: 1.1,
        transition: { duration: 0.3 },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } },
    },
  };

  return (
    <section id="team" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-deep to-green-dark">
            {teamData.heading.title}{" "}
            <span className="bg-gradient-to-r from-orange-vibrant to-orange-light bg-clip-text text-transparent">
              {teamData.heading.highlighted}
            </span>
          </h2>
          <p className="text-xl text-gray-600">{teamData.heading.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.container}
        >
          {teamData.members.map((member) => (
            <motion.div
              key={member.id}
              className="team-card bg-white rounded-3xl p-8 shadow-lg group"
              variants={variants.item}
              whileHover="hover"
              variants={variants.cardHover}
            >
              <div className="relative mb-6">
                <motion.div
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl text-white mb-4`}
                  variants={variants.avatarHover}
                >
                  {member.emoji}
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-light rounded-full flex items-center justify-center text-sm animate-bounce">
                  {member.badge}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-green-dark group-hover:text-orange-vibrant transition-colors">
                {member.name}
              </h3>
              <p className="text-orange-vibrant font-semibold text-center mb-4">
                {member.role}
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                <p className="text-gray-600 text-center italic">{member.quote}</p>
              </div>
              <div className="flex justify-center space-x-3">
                {member.social.map((icon, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-orange-light/20 rounded-full flex items-center justify-center hover:bg-orange-light hover:text-white transition-all cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.container}
        >
          {Object.entries(teamData.stats).map(([key], index) => (
            <motion.div key={key} className="text-center" variants={variants.item}>
              <div className="text-3xl md:text-4xl font-bold text-orange-vibrant mb-2">
                {counters[key]}
              </div>
              <p className="text-gray-600">{teamData.statLabels[key]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
