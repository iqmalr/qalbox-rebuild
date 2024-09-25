import { motion } from "framer-motion";
// import ico from "../assets/icons/logo_deestate.png";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-background text-white"
    >
      <div className="min-h-6 px-[50px]"></div>
      <div className="text-grey mx-[50px] flex flex-col items-start justify-center gap-[20px] md:mx-[100px] md:flex-row md:gap-[127px]">
        <div className="w-[294px]">
          {/* <img className="mb-[24px] h-[42px] w-[140px]" src={ico} alt="" /> */}
          <div className="text-base font-semibold">
            We are an established property
          </div>
        </div>
        <div className="w-[90px]">
          <div className="mb-[24px] text-base font-bold">Company</div>
          <div className="text-sm font-semibold">Properties</div>
          <div className="text-sm font-semibold">Agents</div>
          <div className="text-sm font-semibold">Career</div>
          <div className="text-sm font-semibold">Contact</div>
        </div>
        <div className="w-[93px]">
          <div className="mb-[24px] text-base font-bold">Contact Us</div>
          <div className="text-sm font-semibold">Website</div>
          <div className="text-sm font-semibold">Email</div>
          <div className="text-sm font-semibold">Whatsapp</div>
        </div>
        <div className="w-[90px]">
          <div className="mb-[24px] text-base font-bold text-black">
            Support
          </div>
          <div className="text-sm font-semibold">FAQ</div>
          <div className="text-sm font-semibold">Booking</div>
          <div className="text-sm font-semibold">City Guide</div>
        </div>
        <div className="w-[294px]">
          <div className="mb-[24px] text-base font-bold text-black">Office</div>
          <div className="text-sm font-semibold">
            Jl. Jombor Lor Kec. Mlati, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
