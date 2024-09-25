import QalboxSVGIcon from "../assets/icons/QalboxSVG";
import { Button } from "./Button";
import { CustomContainer } from "./CustomContainer";

export const Headers = () => {
  return (
    <>
      <header className="relative z-20 bg-backgroundContrast text-white">
        <CustomContainer className="flex min-h-[--header-row-height] items-center justify-between">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center pl-6 pr-40 text-xl"
          >
            <QalboxSVGIcon />
          </a>
          <div className="flex w-full flex-row justify-between pr-40">
            <div>All</div>
            <div>Islam</div>
            <div>Kids</div>
            <div>Lifestyle</div>
            <div>Series</div>
            <div>Films</div>
            <div>Shorts</div>
          </div>
        </CustomContainer>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <CustomContainer className="flex h-[--header-row-height] items-center justify-between">
          <p className="text-21 font-semibold">Qalbox App +</p>
          <Button size="small">Stream now</Button>
        </CustomContainer>
      </div>
    </>
  );
};
