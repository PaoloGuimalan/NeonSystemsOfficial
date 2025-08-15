type Props = {
  className?: string;
};

const CodeQuality = ({ className }: Props) => {
  return (
    <svg
      className={className}
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="256"
        cy="256"
        r="26"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="10"
      ></circle>
      <circle
        cx="346"
        cy="256"
        r="26"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="10"
      ></circle>
      <circle
        cx="166"
        cy="256"
        r="26"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="10"
      ></circle>
      <path
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="42"
        d="M160 368 32 256l128-112m192 224 128-112-128-112"
      ></path>
    </svg>
  );
};

export default CodeQuality;
