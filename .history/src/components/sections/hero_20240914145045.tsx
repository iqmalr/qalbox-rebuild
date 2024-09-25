import { Button } from "../Button";
import { CustomContainer } from "../CustomContainer";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="relative h-[300vh] bg-background text-white">
      <div className="bg-black absolute inset-0 left-0 top-0 w-full opacity-60 h-[200vh]">
        <img
          src="https://app.muslimpro.com/qalbox/_next/image?url=https%3A%2F%2Fdownload.muslimpro.com%2Fimages%2Fqalbox%2Fen%2Ffeatured%2Flarge%2FWomen%2520in%2520the%2520Quran%2520and%2520the%2520Blessed%2520Household%2520of%2520the%2520Prophet_Featured_Image_Large.jpg&w=3840&q=100"
          alt="Women in the Quran and the Blessed Household of the Prophet"
          className="h-auto w-full sticky top-0"
        />
      </div>
      <CustomContainer className="relative z-10 flex min-h-[--hero-height] flex-col justify-start pb-7 ">
        <h1 className="mb-10 text-72 font-bold">
          Assalamualaikum
          <br />
          from Qalbox.
        </h1>
        <Button className="mb-16" size="large">
          Large Button
        </Button>
        <p className="font-semibold">Watch on Muslim Pro.</p>
      </CustomContainer>
    </div>
  );
};
