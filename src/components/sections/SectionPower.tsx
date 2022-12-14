import { useInView } from "react-intersection-observer";

export const SectionPower = ({ data }: any) => {
  const { ref: powerText, inView: powerTextAnim } = useInView();
  const { ref: powerBrowser, inView: powerBrowserAnim } = useInView();
  const { ref: powerImg2, inView: powerImg2Anim } = useInView();

  return (
    <div className="mt-16 mx-auto max-w-7xl">
      <div className="-mx-6 pb-12 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div className="pr-5">
            <div
              ref={powerText}
              className={`relative duration-300 ${
                powerTextAnim ? "slide-left-after" : "slide-left-before"
              }`}
            >
              <h3
                className="mb-4 text-5xl font-extrabold"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <p className="text-gh-secondary text-xl mb-5">
                {data.description}
              </p>
            </div>

            <div
              className={`relative ${
                powerBrowserAnim ? "slide-right-after" : "slide-right-before"
              }`}
              ref={powerBrowser}
            >
              <img
                src={data.browserImage}
                alt="cpu"
                width={321}
                height={41}
                className="block"
              />
            </div>
          </div>
        </div>
        <div className="px-6 py-4 w-1/2">
          <div className="relative">
            <div className="flex flex-col">
              <div className="max-w-xl">
                <img
                  src={data.imgVscode}
                  alt="cpu"
                  width={571}
                  height={363}
                  className="shadow-overlay-card"
                />
              </div>{" "}
              <div
                ref={powerImg2}
                className={`max-w-[492px] mt-[-20%] z-20 self-end relative ${
                  powerImg2Anim ? "slide-right-after" : "slide-right-before"
                }`}
              >
                <img
                  src={data.imgTerminal}
                  alt=""
                  className="shadow-overlay-card object-cover align-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
