import Check from "@/assets/icons/Check";
import Cross from "@/assets/icons/Cross";
import { cn } from "@/lib/utils/cn";

type Props = {
  type: "error" | "success";
  title: string;
  description: string;
};

const Alert = ({ type, title, description }: Props) => {
  const Icon = {
    error: <Cross className="w-8 fill-red-500" />,
    success: <Check className="w-8 fill-green-500" />,
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-10 rounded shadow py-6 px-4 border gap-x-4 bg-white flex items-center justify-center"
      )}
    >
      {Icon[type]}
      <div>
        <p className="font-bold mb-1 text-lg text-dark-100">{title}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Alert;
