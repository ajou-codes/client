/* This example requires Tailwind CSS v2.0+ */
import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import GuideBox from "@/components/organisms/GuideBox";
import StartingPoint from "@/components/organisms/StartingPoint";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";
import { Carousel } from "flowbite-react";

// 서버 데이터 베이스로 저장
const items = [
  {
    title: "자바스크립트 기초",
    description: "Level 1",
    icon: SiJavascript,
    background: "bg-yellow-400",
  },
  {
    title: "타입스크립트 기초",
    description: "Level 1",
    icon: SiTypescript,
    background: "bg-blue-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 1",
    icon: SiPython,
    background: "bg-indigo-500",
  },
];

const items2 = [
  {
    title: "파이썬 기초",
    description: "Level 1",
    icon: SiPython,
    background: "bg-indigo-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 2",
    icon: SiPython,
    background: "bg-indigo-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 3",
    icon: SiPython,
    background: "bg-indigo-500",
  },
];

function GuidePage() {
  return (
    <div className="relative">
      <Button className="absolute top-5 right-10">문제 업로드</Button>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5">
        <Carousel>
          <img
            src="/new.png"
            alt="new"
            className="object-contain h-full bg-[#3949AB]"
          />
          <img
            src="/logo2.png"
            alt="logo2"
            className="object-contain h-full bg-[#1B2528]"
          />
        </Carousel>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <div className="flex gap-3">
          <GuideBox
            title="단어장 만들기"
            author="강선규"
            level={3}
            onClick={() => alert("ASD")}
            className="flex-1"
          />
          <GuideBox
            title="단어장 만들기"
            author="강선규"
            level={1}
            className="flex-1"
          />
        </div>
        <div className="flex gap-3">
          <GuideBox
            title="단어장 만들기"
            author="강선규"
            level={2}
            className="flex-1"
          />
          <GuideBox
            title="단어장 만들기"
            author="강선규"
            level={3}
            className="flex-1"
          />
        </div>
      </div>
      <div className="mb-5">
        <StartingPoint
          items={items}
          title={"프로그래밍 기본기 다지기 !!"}
          description={"강선규님"}
        />
      </div>
      <div>
        <StartingPoint
          items={items2}
          title={"파이썬 기본 강의"}
          description={"김태헌님"}
        />
      </div>
    </div>
  );
}

export default GuidePage;
