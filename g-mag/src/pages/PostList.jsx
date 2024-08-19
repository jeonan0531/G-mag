import Container from "./Container.jsx";
import Footer from "./Footer";
import PreviewPost from "./PreviewPost.jsx";
import Title from "./Title";
import reporters from "./reporters.jsx";
// const PAGE = [
//   { name: "이주현", id: 2, title: "더 리더" },
//   { name: "이지혁", id: 1, title: "분데스리가" },
//   { name: "호재원", id: 2, title: "아트마켓" },
//   { name: "박보현", id: 3, title: "독일어" },
//   { name: "전우빈", id: 2, title: "유로 2024" },
// ];

export default function PostListPage() {
  return (
    <>
      <Title
        title="GermanMagazine"
        subtitle="충남대학교 독어독문학과 웹메거진 동아리"
        heading="site-heading"
      />

      <Container>
        <div className="row">
          {reporters.map((post, index) => (
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

      {/* {PAGE.map( (page) => (
        <>
        <hr className="my-4" />
        <div className="post-preview">
            <h2 className="post-title">{page.title}</h2>
            <p className="post-meta">
                Posted by {page.name}
            </p>
        </div>
        </>
    ))} */}
    </>
  );
}
