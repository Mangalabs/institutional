import { footerData } from "../data/footerData";
import { useEffect } from "react";

const SectionTitle = ({ children }) => (
  <h4 className="font-poppins font-semibold text-lg mb-4">{children}</h4>
);

const Footer = () => {
  const year = new Date().getFullYear();
  const { brand, socialLinks, quickLinks, services, contact, copyright } =
    footerData;

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000;
          let startTime = null;

          const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };

          const easeInOutQuad = (t, b, c, d) => {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
          };

          requestAnimationFrame(animation);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const Brand = () => (
    <div>
      <div className="flex">
        <img src="/icon.webp" alt="MangaLab Icon" className="h-8 w-8 mr-1 " />
        <div className="text-2xl font-poppins font-bold mb-4 bg-gradient-to-r from-orange-vibrant to-orange-light bg-clip-text text-transparent">
          {brand.name.split(brand.highlight)[0]}
          <span className="text-white">{brand.highlight}</span>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{brand.description}</p>
      <div className="flex space-x-4">
        {socialLinks.map(({ label, icon }, i) => (
          <a
            key={i}
            href="#"
            aria-label={label}
            className="w-10 h-10 bg-orange-vibrant rounded-full flex items-center justify-center hover:bg-orange-light transition-colors duration-300"
          >
            <span className="text-white">{icon}</span>
          </a>
        ))}
      </div>
    </div>
  );

  const LinkList = ({ title, items, isAnchor = true }) => (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            {isAnchor ? (
              <a
                href={item.href}
                className="text-gray-300 hover:text-orange-light transition-colors duration-300"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-300">{item.value || item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-green-deep py-12 border-t border-orange-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <Brand />
          <LinkList title="Links Rápidos" items={quickLinks} />
          <LinkList title="Serviços" items={services} isAnchor={false} />
          <LinkList title="Contato" items={contact} isAnchor={false} />
        </div>

        <div className="border-t border-orange-light/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {year} MangaLab. {copyright.text} |
            <span className="bold ml-2">
              Desenvolvido com <img src={copyright.icon} alt="amor" className="h-4 w-4 inline m-1" /> pela equipe <b>MangaLab</b>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;