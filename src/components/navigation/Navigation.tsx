import Burger from "@/assets/icons/Burger";

import { useState } from "react";
import NavigationModal from "./NavigationModal";
import Close from "@/assets/icons/Close";
import { cn } from "@/lib/utils/cn";
import { NAVIGATION_PATHS } from "@/lib/statics/navigations";
import { useLocation } from "react-router-dom";
import Neon from "@/assets/icons/Neon";

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-white shadow sticky top-0 flex justify-between items-center z-[5] px-4 sm:px-8 py-4 xl:px-24">
      <a href="/">
        <div className="flex items-center gap-1">
          <Neon className="w-20 h-20" />
          <h5 className="font-epilogue text-3xl text-dark-100 font-bold">
            Neon Systems
          </h5>
        </div>
      </a>

      <div onClick={() => setIsOpen((prev) => !prev)} className="lg:hidden">
        <Burger className={cn(isOpen && "hidden", "nav-trigger-icon")} />
        <Close className={cn(!isOpen && "hidden", "nav-trigger-icon")} />
      </div>

      <div className="hidden lg:flex items-center gap-x-8 font-epilogue font-lg font-semibold">
        {NAVIGATION_PATHS?.map((link) => (
          <a
            key={link?.path}
            href={link?.path}
            className={cn(
              "hover:text-[#C724B1]",
              pathname === link.path && "text-[#C724B1]"
            )}
          >
            <p>{link.title}</p>
          </a>
        ))}
      </div>

      <NavigationModal isOpen={isOpen} />
    </div>
  );
};

export default Navigation;
