import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

export default function MemoirPage(props) {
  return (
    <>
      <Title
        title="Rückblick"
        subtitle="Posted by German Magazine on March 5, 2024"
        heading="post-heading"
        subheading="meta"
      />
      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <p>
                젊은 매거진의 예비 독자 여러분! 개발파트를 맡고 있는 J입니다.
                <br />
                기자로서 여러분께 다양한 글을 보여드리고 싶었는데, 이렇게라도
                인사드리니 감회가 새롭습니다 :&#41; <br />
                오늘 이 시간에는 웹 매거진 동아리를 만들기까지의 과정을 여러분과
                함께하려 합니다!
              </p>
              <p>
                젊은 매거진은 2023 동계 CNU 학습동아리 사업에 선정되면서
                탄생했는데요. (무려 7 대 1의 경쟁률을 뚫고!)
                <br />
                6명의 기자, 1명의 개발자로 이루어져 있는 웹 매거진 동아리입니다.
              </p>
              <img
                sizes="(max-width: 600px) 380px, 800px"
                className="responsive-image"
                src={require("./회고/회고 11.jpg")}
              />
              <br />
              <br />
              <br />
              동아리 기획 초기엔 독일의 문학을 공부하는 동아리를 만들기로
              했었는데
              <br />
              1. 조금 더 유의미한 ‘결과물’이 나올 수 있는
              <br />
              2. 컴퓨터 친화적인(?)
              <br />을 주제로 더욱 고민하다 보니 젊은 매거진의 윤곽이 잡히기
              시작했고
              <br />
              하루 만에 계획서를 다 갈아엎고 제출했던 기억이 나네요.
              <br />
              <br />
              <img
                sizes="(max-width: 600px) 380px,
         800px"
                className="responsive-image"
                src={require("./회고/회고 6.jpg")}
              />
              <br />
              <blockquote class="blockquote">
                (당시 저희의 기획서입니다!)
              </blockquote>
              <p>
                기획 당시 저도 코딩에 대해 전혀 모르는 상태였고,
                <br />
                팀원들 또한 어떤 주제로 기사를 쓸지 아무것도 정해져 있지 않은
                상태였습니다. 하지만 온라인 회의를 통해 서로의 역할을 차근차근
                정하기 시작했고, <br />
                팀원들이 열심히 자료 조사를 해준 덕에
                <br />
                12주가 지난 지금 총 20개가 넘는 글들이 여러분을 기다리고
                있습니다.(짝짝짝!)
              </p>
              <img
                sizes="(max-width: 600px) 380px,
         800px"
                className="responsive-image"
                src={require("./회고/회고 1.jpg")}
              />
              <br />
              <blockquote class="blockquote">
                회의(주제공유)-초안 작성-피드백 및 최종본 작성-웹사이트 개제의
                순서로 진행됩니다
              </blockquote>
              <p>
                12주 동안 매번 다른 글을 작성하다 보면 주제에 대한 고민이 참
                많아집니다. 아쉬운 점이 있다면 독일에서 직접 그들의 문화를
                경험하기보단 인터넷을 통해 얻은 간접적인 경험을 들려드리는 점이
                많았어요. 머나먼 독일이란 나라를 간접적인 경험만을 통해 독자들을
                매료시킬 수 있을까라는 고민이 들었죠. 젊은 매거진의 방향성에
                대해 고민하던 중 한국에서 경험할 수 있는 독일의 문화를 직접
                경험해 보고 들려주자고 결심했습니다.
              </p>
              <p>
                원래는 매주 1가지의 글을 썼지만, 2-3주가 걸리더라도 하나의
                완성된 글을 보여드리기로 결정했습니다. 독자님들이 느끼기에 좀 더
                재밌는 글이었으면 좋겠네요! (독일 맥주 먹방은 제가 꼭 해보고
                싶은 주제였습니다.)
              </p>
              <img
                sizes="(max-width: 600px) 380px,
         800px"
                className="responsive-image"
                src={require("./회고/회고 10.jpg")}
              />
              <br />
              <blockquote class="blockquote">
                글에 대한 다양한 반응은 기자에게 큰 원동력이 됩니다.
              </blockquote>
              <p>
                아직은 부족하지만
                <br />
                여러분이 느낀 독일의 이야기를 들려주신다면 더욱 풍성한 젊은
                매거진이 되겠죠?(개발 인재도 상시 모집 중입니다.)
              </p>
              <p>
                다른 나라의 언어/문화를 안다는 것은 삶을 참 풍요롭게 해주는 것
                같습니다.
                <br />
                젊은 매거진을 통해 여러분이 독일이란 나라와 더욱 가까워지길
                기대해 봅니다!
              </p>
              <p>-3월의 어느 날 J 드림-</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
