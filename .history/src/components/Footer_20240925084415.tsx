// import ico from "../assets/icons/logo_deestate.png";

const Footer = () => {
  return (
    // <CustomContainer className="flex flex-col">

    //     <div>Questions? Call 007-803-321-2130</div>
    //     <div className="flex flex-row">
    //       <div>
    //         <div>judul</div>
    //         <div>isi</div>
    //       </div>
    //       <div>
    //         <div>judul</div>
    //         <div>isi</div>
    //       </div>
    //       <div>
    //         <div>judul</div>
    //         <div>isi</div>
    //       </div>
    //       <div>
    //         <div>judul</div>
    //         <div>isi</div>
    //       </div>
    //     </div>

    // </CustomContainer>

    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl py-10 text-white">
        <div className="text-center">
          <h3 className="mb-3 text-3xl"> Download our fitness app </h3>
          <p> Stay fit. All day, every day. </p>
          <div className="my-10 flex justify-center">
            <div className="mx-2 flex w-52 items-center rounded-lg border px-4 py-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
              />
              <div className="ml-3 text-left">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div className="mx-2 flex w-44 items-center rounded-lg border px-4 py-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
              />
              <div className="ml-3 text-left">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col items-center text-sm text-gray-400 md:flex-row md:justify-between">
          <p className="order-2 mt-8 md:order-1 md:mt-0">
            {" "}
            &copy; Beautiful Footer, 2021.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="border-l px-2">Contact us</span>
            <span className="border-l px-2">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
