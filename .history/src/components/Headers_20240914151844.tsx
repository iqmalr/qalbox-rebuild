import QalboxSVGIcon from "../assets/QalboxSVG";
import { Button } from "./Button";
import { CustomContainer } from "./CustomContainer";


export const Headers = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <CustomContainer className="flex h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-21"
          >
            <QalboxSVGIcon />
            {/* <span className="sr-only">Back to homepage</span> */}
            <span >Back to homepage</span>
          </a>
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
