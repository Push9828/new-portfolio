import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export const TechIcon = ({
  Icon,
  className,
}: {
  Icon: IconType;
  className: string;
}) => {
  return (
    <Icon className={twMerge("size-7 text-black/80 text-3xl", className)} />
  );
};
