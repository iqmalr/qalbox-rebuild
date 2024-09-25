// import ico from "../assets/icons/logo_deestate.png";

import { CustomContainer } from "./CustomContainer";

const Footer = () => {
  return (
    <CustomContainer className="text-grey mx-[50px] flex flex-col items-start justify-center gap-[20px] md:mx-[100px] md:flex-row md:gap-[127px]">
      <div>Questions? Call 007-803-321-2130</div>
      <div className="flex flex-row">
        <div>
          <div>judul</div>
          <div>isi</div>
        </div>
        <div>
          <div>judul</div>
          <div>isi</div>
        </div>
        <div>
          <div>judul</div>
          <div>isi</div>
        </div>
        <div>
          <div>judul</div>
          <div>isi</div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Footer;
