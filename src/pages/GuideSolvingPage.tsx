import Button from "@/components/atoms/Button";
import Markdown from "@/components/molecules/Markdown";
import Step, { StepWrapper } from "@/components/molecules/Step";
import useStep from "@/hooks/useStep";

/** 임시 데이터 */
const vscodeUrl =
  "https://jupyter.ajou.ac.kr/code/gron1gh1/code/?folder=/home/gron1gh1/workspace";

const USER_NAME = "gron1gh1";

// --------
const markdown = `
# Hello
## Hello !
### Hello !
#### Hello !
##### Hello !
###### Hello !


~asd~


헬로 월드
~~~js
console.log('Hello World');
~~~
[Step-1]

`;

function GuideSolvingPage() {
  const steps = useStep(USER_NAME, [
    {
      name: "main.js 만들기",
      status: "current",
      type: "filename",
      expect: "main.js",
    },
    {
      name: "Hello World 출력하기",
      status: "upcoming",
      type: "code",
      expect: "console.log('Hello World')",
    },
  ]);
  return (
    <div className="h-full flex">
      <div className="relative w-2/3">
        <iframe src={vscodeUrl} className="h-full w-full" />
      </div>
      <div className="w-1/3">
        <iframe
          className="w-full h-1/3"
          src="https://www.youtube.com/embed/CSWc0HYjxEs"
          title="자바스크립트에서 가장 이상한 문법"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="p-5">
          <Markdown markdown={markdown} />
          <StepWrapper title="자바스크립트 기초">
            {steps.map((step) => (
              <Step status={step.status}>{step.name}</Step>
            ))}
          </StepWrapper>
          <Button className="absolute bottom-5 right-10 w-100">
            다음 문제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuideSolvingPage;
