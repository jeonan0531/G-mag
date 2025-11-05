import Footer from "./Footer";
import Title from "./Title";

export default function AboutPage() {
  return (
    <>
      <Title
        title="젊은 매거진이란?"
        subtitle="This is what I do."
        heading="page-heading"
      />
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <center>
                <p>
                  젊은 매거진이란 우리가 쉽게 접하기 어려웠던 독일의 다양한
                  정보를 전달하는 충남대학교 웹 매거진 동아리입니다.
                  <br />
                  1명의 개발자와 6명의 기자들이 좋은 글을 전하기 위해 오늘도
                  고군분투합니다.
                </p>
                <p>
                  <h2>-왜 젊은(German) 매거진인가?-</h2>
                  <br />
                  <br />
                  "독일어를 배우지만 아직 독일이란 나라는 어려워..", "교환학생을
                  가고 싶은데 정보가 부족해.."라는 생각해 본 적 있으신가요?
                  한국에서, 그리고 혼자서 독일에 관해 얻을 수 있는 정보는 극히
                  한정적입니다. 유명한 것 한두 개는 알겠는데.. 내가 어떤 정보를
                  궁금해하는 지도 잘 모를 노릇이죠.
                </p>
                <p>
                  위와 같은 고민을 하실 여러분에게 다양한 정보를 전달하기 위해
                  7명의 팀원이 모였습니다. 어렵고 딱딱한 글보다 젊은 감성으로!
                  친구가, 친한 선배가 말해주듯이 읽기 쉬운 매거진을 만들기 위해
                  노력합니다. 관심사도, 형식도 모두 다른 기자 6명의 매력이 통통
                  튀는 글을 만날 수 있어요!
                </p>
                <p>
                  평소 접하기 어려웠던 독일이라는 나라를 더욱 친근하게 만들고
                  <br />더 나아가 독일이란 나라에 직접 가보고, 그 경험을
                  전달합니다.
                  <br />
                  우리 모두가 독일과 가까워질 그 날까지!!
                </p>
              </center>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
