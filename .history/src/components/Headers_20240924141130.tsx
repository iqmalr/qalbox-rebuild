import QalboxSVGIcon from "../assets/icons/QalboxSVG";
import { Button } from "./Button";
import { CustomContainer } from "./CustomContainer";

export const Headers = () => {
  return (
    <>
      <header className="relative z-20 bg-backgroundContrast text-white">
        <CustomContainer className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="text-xl -ml-6 flex h-[--header-row-height] items-center px-6"
          >
            <QalboxSVGIcon />
            <span>Back to homepage</span>
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
