import Image from "next/image";
import cn from "clsx";

type DragbleProps = {
  name: string;
  className?: string;
  size?: string;
};
import { motion } from "framer-motion";

const Dragble = ({ name, className, size }: DragbleProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 12 }}
      whileTap={{ scale: 1.2, cursor: "grabbing" }}
      whileDrag={{ zIndex: 1000 }}
      drag
      dragMomentum={false}
      className={cn("z-40 ", className)}
    >
      <div className="w-full h-full absolute top-0 left-0" />
      <Image
        src={`/${name}.svg`}
        width={100}
        height={100}
        alt="table"
        className={cn("", size)}
      />
    </motion.div>
  );
};

export default Dragble;
