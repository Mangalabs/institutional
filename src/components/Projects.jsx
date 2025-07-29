import { useState, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const { heading, filters, projects, buttonText, colorSchemes } = projectsData;
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter, projects]
  );

  const getColorScheme = useMemo(
    () => (gradient) =>
      gradient.includes("orange") ? colorSchemes.orange : colorSchemes.green,
    [colorSchemes]
  );

  const handleProjectClick = (link, e) => {
    e?.stopPropagation?.();
    if (link) window.open(link, "_blank");
  };

  const variants = {
    container: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.3 } },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      exit: { opacity: 0, scale: 0.9 },
    },
    hoverScale: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tapScale: { scale: 0.98 },
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants.fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-deep to-green-dark">
            {heading.title}{" "}
            <span className="bg-gradient-to-r from-orange-vibrant to-orange-light bg-clip-text text-transparent">
              {heading.highlighted}
            </span>
          </h2>
          <p className="text-xl text-gray-600">{heading.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => setActiveFilter(id)}
              whileHover={variants.hoverScale}
              whileTap={variants.tapScale}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                id === activeFilter
                  ? "bg-orange-vibrant text-white shadow-lg shadow-orange-vibrant/30"
                  : "bg-white text-green-deep hover:bg-orange-vibrant hover:text-white"
              }`}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={variants.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(
              ({
                id,
                title,
                description,
                icon,
                tags,
                gradient,
                image,
                link,
              }) => {
                const isHovered = hoveredId === id;
                const colorScheme = getColorScheme(gradient);

                return (
                  <motion.div
                    key={id}
                    layout
                    variants={variants.item}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="relative cursor-pointer"
                    onHoverStart={() => setHoveredId(id)}
                    onHoverEnd={() => setHoveredId(null)}
                  >
                    <motion.div
                      whileHover={variants.hoverScale}
                      whileTap={variants.tapScale}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col text-green-deep"
                      onClick={(e) => handleProjectClick(link, e)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={image}
                          alt={title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          width="500"
                          height="192"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}
                        />

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                          <motion.button
                            whileHover={variants.hoverScale}
                            whileTap={variants.tapScale}
                            className="bg-white text-green-deep px-6 py-3 rounded-full font-semibold hover:bg-orange-light transition-all"
                            onClick={(e) => handleProjectClick(link, e)}
                          >
                            {buttonText}
                          </motion.button>
                        </motion.div>

                        <motion.div
                          className="absolute bottom-4 left-4 text-white"
                          animate={{
                            scale: isHovered ? 1.2 : 1,
                            transition: { type: "spring", stiffness: 500 },
                          }}
                        >
                          <div className="text-4xl mb-2">{icon}</div>
                        </motion.div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className={`px-3 py-1 rounded-full text-sm ${colorScheme.bg} ${colorScheme.text}`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              }
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
