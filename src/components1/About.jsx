import { memo, useMemo } from "react";
import { aboutData } from "../data/aboutData";

const About = () => {
  const {
    title,
    highlightedTitle,
    highlightedText,
    description,
    timelineItems,
    teamCard,
  } = aboutData;

  const [firstWord, restTitle] = useMemo(() => {
    const [first, ...rest] = title.split(" ");
    return [first, rest.join(" ")];
  }, [title]);

  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-green-deep">
              {firstWord} <span className="text-orange-vibrant">{highlightedTitle}</span>
            </h2>

            {description.map((text, i) => {
              const parts = text.includes(highlightedText)
                ? text.split(highlightedText)
                : null;

              return (
                <p key={i} className="text-lg mb-6 leading-relaxed">
                  {parts ? (
                    <>
                      {parts[0]}
                      <span className="text-orange-vibrant font-semibold">
                        {highlightedText}
                      </span>
                      {parts[1]}
                    </>
                  ) : (
                    text
                  )}
                </p>
              );
            })}

            <div className="space-y-6">
              {timelineItems.map(({ year, description, color }, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className={`w-4 h-4 ${color} rounded-full`} />
                  <div>
                    <h4 className="font-poppins font-semibold text-green-deep">
                      {year}
                    </h4>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in">
            <div
              className={`w-full h-96 bg-gradient-to-br ${teamCard.gradient} rounded-2xl flex items-center justify-center`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4"><img className="h-35 w-45 m-auto" src={teamCard.teamIcon} alt="" /></div>
                <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                  {teamCard.title}
                </h3>
                <p className="text-orange-light">{teamCard.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
