import { Link } from "react-router-dom";
import PreviewPost from "./PreviewPost.jsx";
import Title from "./Title.jsx";
// import MDEditor from "@uiw/react-md-editor";
// import { useState } from "react";
import Container from "./Container.jsx";
import reporters from "./reporters.jsx";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  // const [value, setValue] = useState("**Hello world!**");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-page");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Title
        title="GermanMagazine"
        subtitle="충남대학교 독어독문학과 웹메거진 동아리"
        heading="site-heading"
      />
      <Container>
        {/* <PreviewPost
          to="/post/이지혁/2"
          title="분데스리가 그리고 대한민국"
          meta="Posted by 이지혁 on July 29, 2024"
        /> */}
        <div className="row">
          {/* {reporters.map((post, index) => (
            <PreviewPost
              key={index}
              to={`/post/${post.reporter}/${post.id}`}
              title={post.title}
              meta={post.date}
              bgImg={`./${post.reporter}/${post.id}/`}
            />
          ))} */}
          {reporters.slice(0, 6).map((post, index) => (
            <PreviewPost
              key={index}
              to={`/post/${post.reporter}/${post.id}`}
              title={post.title}
              meta={post.date}
              bgImg={`./${post.reporter}/${post.id}/`}
            />
          ))}
        </div>

        <div class="d-flex justify-content-end mb-4">
          <Link
            class="btn btn-primary text-uppercase"
            to="postlist"
            onClick={handleClick}
          >
            {" "}
            더 많은 글이 궁금하다면? →
          </Link>
        </div>
      </Container>

      {/* <div className="container"> */}
      {/* <MDEditor value={value} onChange={setValue} /> */}
      {/* <MDEditor height={865} source={value} style={{ whiteSpace: 'pre-wrap' }}/> */}
      {/* </div> */}
    </>
  );
}
