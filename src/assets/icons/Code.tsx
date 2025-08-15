type Props = {
  className?: string;
};

const Code = ({ className }: Props) => {
  return (
    <svg
      className={className}
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M160 368 32 256l128-112m192 224 128-112-128-112m-48-48-96 320"
      ></path>
    </svg>
  );
};

export default Code;
