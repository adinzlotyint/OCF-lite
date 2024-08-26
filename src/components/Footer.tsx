import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="grid xl:grid-cols-3 bg-primary h-full pt-3 pb-2">
        <div className="row-start-3 sm:row-start-2 xl:row-start-1 flex justify-start xl:items-center items-end text-white font-roboto text-[8px] ml-2 xl:mt-0 mt-2">
          Created by Adrian Ziętek
        </div>
        <div className="row-start-1 col-span-2 xl:col-span-1 text-white font-roboto text-xs mb-3 h-full">
          <ul className="grid h-full items-center text-center grid-cols-footerGrid">
            <li></li>
            <li>Reporting</li>
            <li>|</li>
            <li>Manual</li>
            <li>|</li>
            <li>Contact</li>
            <li></li>
          </ul>
        </div>
        <div className="row-start-2 xl:row-start-1  flex justify-end items-end text-white font-roboto text-xs mt-2 xl:mt-0">
          <FaLinkedin className="w-fit xl:h-full sm:h-8 h-12 mr-2" />
          <FaFacebookSquare className="w-fit xl:h-full sm:h-8 h-12 mr-0 sm:mr-2" />
          <FaGithubSquare className="w-fit xl:h-full sm:h-8 h-12 mr-0 ml-2 sm:mr-2" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
