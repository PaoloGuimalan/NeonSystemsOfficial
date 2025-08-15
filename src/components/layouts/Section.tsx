import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Section = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "w-full py-24 px-4 sm:px-8 xl:px-24 bg-[#F9F9F9]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Section;
