import { twMerge } from "tailwind-merge";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        "rounded-xl border bg-white shadow-sm px-4 py-6 sm:px-6 transition-all duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
