import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Parallax = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden sticky top-[112px] bg-white  lg:h-screen justify-start md:justify-center flex-col md:flex-row md:gap-20 px-4  sm:px-8 xl:px-24 py-24 items-start md:items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Parallax;
