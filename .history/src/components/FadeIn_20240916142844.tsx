import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props={
    children:React.ReactNode;
    className?:string;
}
export const FadeIn = ({ children, className }:Props) => {
return(
    <motion.div className={twMerge={("",className)}}>
{children}
    </motion.div>
)
}