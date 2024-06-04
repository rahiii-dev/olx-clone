import footerLinks from "../utils/footerLinks";
import cartrade_tech from '../assets/images/cartrade_tech.svg'
import olx from '../assets/images/olx.svg'
import carwale from '../assets/images/carwale.svg'
import bikewale from '../assets/images/bikewale.svg'
import cartrade from '../assets/images/cartrade.svg'
import mobility from '../assets/images/mobility.svg'

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-200">
        <div className="container pt-5 pb-9  flex gap-3 flex-wrap">
          {footerLinks.map((item, idx) => (
            <LinkContainer key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className="bg-slate-800">
        <div className="container pt-5 pb-10  flex gap-3">
          <div className="h-[100px] min-w-[200px] ps-0 p-5 border-r-2 border-white flex items-center">
              <img
                className="w-full h-auto"
                src={cartrade_tech}
                alt="Car Trade"
              />
          </div>
          <div className="flex-grow h-[100px] min-w-[100px] p-5 border-white flex justify-center items-center">
              <img
                className="w-full h-auto max-w-[100px]"
                src={olx}
                alt="Car Trade"
              />
          </div>
          <div className="flex-grow h-[100px] p-5 min-w-[100px] border-white flex items-center">
              <img
                className="w-full h-auto"
                src={carwale}
                alt="Car Trade"
              />
          </div>
          <div className="flex-grow h-[100px] p-5 min-w-[100px] border-white flex items-center">
              <img
                className="w-full h-auto"
                src={bikewale}
                alt="Car Trade"
              />
          </div>
          <div className="flex-grow h-[100px] p-5 min-w-[100px] border-white flex items-center">
              <img
                className="w-full h-auto"
                src={cartrade}
                alt="Car Trade"
              />
          </div>
          <div className="flex-grow h-[100px] p-5 min-w-[100px] border-white flex items-center">
              <img
                className="w-full h-auto"
                src={mobility}
                alt="Car Trade"
              />
          </div>
        </div>
      </div>
    </footer>
  );
};

const LinkContainer = ({ title, links, linkType }) => {
  return (
    <div className="min-w-48 flex-grow">
      <h4 className="uppercase font-semibold mb-3">{title}</h4>
      <div
        className={`flex ${
          linkType && linkType === "icon" ? "flex-row gap-2" : "flex-col"
        }`}
      >
        {links.map((link, idx) => {
          return (
            <a
              key={idx}
              href={link?.url}
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500"
            >
              {link?.icon ? <link.icon /> : link?.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
