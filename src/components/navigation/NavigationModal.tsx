import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import { NAVIGATION_PATHS } from "@/lib/statics/navigations";
import { cn } from "@/lib/utils/cn";

type Props = {
  isOpen: boolean;
};
const NavigationModal = ({ isOpen }: Props) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div
      className={`bg-white w-full duration-300 py-4 px-8 transition-all absolute top-0 shadow -z-[10] left-0 lg:hidden ${
        isOpen ? "mt-[112px]" : "hidden -mt-[220px]"
      } `}
    >
      <div className="nav-items-dropdown">
        {NAVIGATION_PATHS?.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={cn(
              "hover:text-[#C724B1]",
              pathname === link.path && "text-[#C724B1]"
            )}
          >
            <p>{link.title}</p>
          </a>
        ))}
        <a href="/contact-us">
          <Button variant="outline" size="lg" className="!mb-0 w-full">
            Contact Us
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NavigationModal;
