import { cn } from "@/lib/utils";
import Link from "next/link";

export interface IProps {
  titleTop: string;
  titleBottom: string;
  bg: string;
  text: string;
  arrow: 'dark' | 'light';
  titleBg?: string;
  image?: string;
  link?: string;
}

function ServiceCard({
  titleTop,
  titleBottom,
  bg,
  text,
  arrow,
  titleBg,
  image,
  link = "/",
}: IProps) {
  return (
    <div
      className={cn(
        bg,
        'rounded-[25px] sm:rounded-[35px] md:rounded-[45px] p-6 sm:p-8 md:p-[50px] shadow-md border-b-[6px] border-b-black transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group'
      )}
    >
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
        <div className={cn('text-xl sm:text-2xl md:text-3xl font-bold rounded-[7px] px-1 mb-2', text)}>
          {titleTop}
        </div>
        <div className={cn('text-xs sm:text-sm md:text-base font-medium rounded-[7px] inline-block px-1', text)}>
          {titleBottom}
        </div>
      </div>
      {image && (
        <div className="flex justify-center mb-6 sm:mb-8">
          <img src={image} alt="card icon" className="group-hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
        </div>
      )}
      <Link href={link}>
        <div className="flex gap-2 items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
          <div>
            {arrow === 'dark' ? (
              <img src="/images/arrow_dark.png" alt="dark arrow icon" className={cn('w-4 h-4 sm:w-5 sm:h-5', bg === 'bg-[#B9FF66]' ? 'filter invert-0 sepia-1 saturate-5 hue-rotate-60' : '')} />
            ) : (
              <img src="/images/arrow_light.png" alt="light arrow icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </div>
          <p className={cn('text-sm sm:text-base md:text-p font-semibold', text)}>
            Learn more
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ServiceCard;
