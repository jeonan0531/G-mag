import Container from "./Container.jsx";
import PreviewPost from "./PreviewPost.jsx";
import Title from "./Title";
import reporters from "./reporters.jsx";

export default function Quiz() {
    const pairsToFind = [
        { reporter: '윤아라', id: 1 },
        { reporter: '윤아라', id: 2 },
        { reporter: '윤아라', id: 3 },
        { reporter: '유건희', id: 1 },
        { reporter: '유건희', id: 3 },
        { reporter: '김리현', id: 1 },
        { reporter: '김리현', id: 2 },
        { reporter: '호재원', id: 1 },
        { reporter: '호재원', id: 4 },
        { reporter: '호재원', id: 5 },
        { reporter: '박보현', id: 1 },
        { reporter: '박보현', id: 2 },
        { reporter: '박보현', id: 5 },
        { reporter: '전우빈', id: 1 },
        { reporter: '전우빈', id: 2 },
        { reporter: '김수현', id: 1 },
        { reporter: '김수현', id: 2 },
        { reporter: '박다연', id: 1 },
        { reporter: '박다연', id: 3 },
        { reporter: '박다연', id: 4 },
        { reporter: '이주현', id: 1 },
        { reporter: '문하연', id: 1 },
        { reporter: '문하연', id: 2 },
        { reporter: '문하연', id: 4 },
      ];
      
    const quiz_list = reporters.filter(item =>
        pairsToFind.some(pair => pair.reporter === item.reporter && pair.id === item.id)
    );
  return (
    <>
      <Title
        title="GermanMagazine"
        subtitle="충남대학교 독어독문학과 웹메거진 동아리"
        heading="site-heading"
      />

      <Container>
        <div className="row">
          {quiz_list.map((post, index) => (
            <PreviewPost
              key={index}
              to={`/post/${post.reporter}/${post.id}`}
              title={post.title}
              meta={`${post.reporter} 기자 / ${post.date}`}
              bgImg={`./${post.reporter}/${post.id}/`}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
