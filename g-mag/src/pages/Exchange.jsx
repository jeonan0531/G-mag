import Container from "./Container";
import PreviewPost from "./PreviewPost";
import Title from "./Title";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ExchangePage(props) {
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
        <PreviewPost
          to={"/post/최장훈/1"}
          title={"교환학생 후기_18학번 최장훈"}
          meta={"Posted by 전우빈, 신정환 on September 24, 2023"}
          bgImg={"./최장훈/1/"}
        />
        <PreviewPost
          to={"/post/박채은/1"}
          title={"교환학생 인터뷰_19학번 박채은선배님"}
          meta={"Posted by 전우빈, 신정환 on September 18, 2023"}
          bgImg={"./박채은/1/"}
        />
      </Container>

      <div className="d-flex justify-content-end mb-4">
        <Link
          class="btn btn-primary text-uppercase"
          to="postlist"
          onClick={handleClick}
        >
          독일에 대한 다양한 정보가 궁금하다면? →
        </Link>
        {/* <a className="btn btn-primary text-uppercase" href="더보기.html">
          독일에 대한 다양한 정보가 궁금하다면? →
        </a> */}
      </div>
    </>
  );
}
