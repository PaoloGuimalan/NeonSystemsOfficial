import Code from "@/assets/icons/Code";
import Service from "@/assets/icons/Service";
import Cash from "@/assets/icons/Cash";

export const SERVICES = [
  {
    title: "Custom POS Systems",
    description:
      "Tailored solutions designed to streamline operations, enhance customer experiences, and boost profitability for businesses transitioning from manual or outdated POS methods.",
    icon: <Cash className="w-8 fill-[#C724B1]" />,
  },
  {
    title: "Application Development",
    description:
      "From sleek business applications that enhance online presence to personalized private and service applications that cater to specific client needs, we deliver responsive, user-friendly designs that drive engagement and growth.",

    icon: <Code className="w-8 stroke-[#C724B1]" />,
  },
  {
    title: "Digital Transformation Consulting",
    description:
      "Strategic guidance and implementation to help businesses leverage technology effectively, ensuring seamless integration of digital solutions for long-term success in the evolving marketplace.",

    icon: <Service className="w-7 fill-[#C724B1]" />,
  },
];
