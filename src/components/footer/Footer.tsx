import Facebook from "@/assets/icons/Facebook";
import Linkedin from "@/assets/icons/Linkedin";
import Telephone from "@/assets/icons/Telephone";
import { SOCIALS } from "@/lib/statics/socials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t  pt-14 px-4 sm:px-8 pb-6 xl:px-24">
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="mb-10 sm:mb-0">
          <Link to="/">
            <h5 className="text-4xl mb-2 text-dark-100 font-bold">
              Neon Systems
            </h5>
          </Link>
          <a href={`mailto: ${SOCIALS.email}`}>
            <p className="text-sm sm:text-lg mb-2">{SOCIALS.email}</p>
          </a>
          <div className="flex items-center gap-4">
            <a href={SOCIALS.facebook} target="_blank">
              <Facebook className="w-6 fill-dark-100" />
            </a>
            <a href={SOCIALS.linkedIn}>
              <Linkedin className="w-6 fill-dark-100" />
            </a>
            <a href={`tel: ${SOCIALS.mobile}`}>
              <Telephone className="w-6 fill-dark-100" />
            </a>
          </div>
        </div>

        <div className="flex gap-x-12 [&>div>a>p]:mb-4 [&>div>ul>li]:cursor-pointer">
          <div>
            <a href="/about-us" className="hover:text-[#C724B1]">
              <p>Who we are</p>
            </a>
            <a href="/contact-us" className="hover:text-[#C724B1]">
              <p>Contact us</p>
            </a>
            <a href="/terms-and-conditions" className="hover:text-[#C724B1]">
              <p>Terms & Conditions</p>
            </a>
          </div>
          <div>
            <a href="/services" className="hover:text-[#C724B1]">
              <p>Our Services</p>
            </a>
            <a href="/faqs" className="hover:text-[#C724B1]">
              <p>FAQ's</p>
            </a>
          </div>
        </div>
      </div>
      <div className="px-8 my-12">
        <div className="text-center border-t border-gray-400 pt-8">
          <h3 className="text-xl font-semibold">
            Copyright © 2024 Neon. All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
