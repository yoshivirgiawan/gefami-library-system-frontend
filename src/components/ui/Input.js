import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
};

export default Input;
