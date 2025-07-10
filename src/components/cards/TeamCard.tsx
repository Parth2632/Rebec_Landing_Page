import { Separator } from "../ui/separator";

interface IProps {
  name: string;
  position: string;
  experience?: string;
  image: string;
  glassy?: boolean;
  summary?: string;
  achievements?: string[];
  linkedin?: string;
}

function TeamCard({ name, position, experience, image, glassy, summary, achievements, linkedin }: IProps) {
  return (
    <div
      className="rounded-[25px] sm:rounded-[35px] md:rounded-[45px] p-6 sm:p-8 md:p-[31px] shadow-md border-b-[6px] bg-white transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex flex-col w-full h-full gap-2 items-center">
        <div className="flex items-center justify-center aspect-square w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-2">
          <img src={image} alt="team image" className="object-cover w-full h-full rounded-full border-2 border-black shadow-md" />
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1">{name}</p>
        <p className="text-base sm:text-lg text-black mb-2">{position}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-2"
          >
            <span className="px-4 py-2 rounded-full bg-black text-white font-semibold text-base sm:text-lg flex items-center gap-2 transition-colors duration-200 hover:bg-[#B9FF66] hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
              Connect on LinkedIn
            </span>
          </a>
        )}
        {summary && <p className="text-base sm:text-lg text-black font-medium mb-2">{summary}</p>}
        <div className="w-full">
          <ul className="text-left space-y-2 mx-auto max-w-xs">
          {achievements && achievements.length > 0 && (
              achievements.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base text-black pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#B9FF66] before:rounded-full before:mr-2">
                  {item}
                </li>
              ))
            )}
            </ul>
          {experience && !achievements && (
            <p className="text-base sm:text-lg text-black font-medium">{experience}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
