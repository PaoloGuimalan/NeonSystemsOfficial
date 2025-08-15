type Props = {
  description: string;
  title: string;
};

const Card = ({ description, title }: Props) => {
  return (
    <div className="px-4 py-6 hover:scale-105 duration-500 transition-transform cursor-pointer bg-white border shadow rounded-md w-full sm:w-96 h-full min-h-96">
      <h1 className="text-lg uppercase font-semibold text-dark-100">
        Our <span className="text-[#C724B1]">{title}</span>
      </h1>

      <div className="border-[#C724B1]/60 border-t mt-2 mb-4" />
      <p>{description}</p>
    </div>
  );
};

export default Card;
