import { technologiesData } from "../data/technologiesData";

const Technologies = () => {
  const { heading, technologies, gridConfig } = technologiesData;

  return (
    <section id="tech" className="py-20 bg-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            {heading.title}{" "}
            <span className="bg-gradient-to-r from-orange-vibrant to-orange-light bg-clip-text text-transparent">{heading.highlighted}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {heading.subtitle}
          </p>
        </div>

        <div
          className={`grid ${gridConfig.base} ${gridConfig.md} ${gridConfig.lg} gap-8`}
        >
          {technologies.map(({ icon, name, tooltip }, i) => (
            <div
              key={i}
              className="tech-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center group relative transition-all duration-300"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-poppins font-semibold">{name}</h3>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-deep text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
