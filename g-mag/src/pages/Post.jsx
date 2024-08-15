import Title from "./Title";
import React from "react";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import repoters from "./reporters";
export default function PostPage(props) {
  const param = useParams();
  const repoter =
    repoters.find(
      (post) => post.reporter === param.name && post.id === Number(param.id)
    ) || {};

  const Content = React.lazy(() =>
    import(`./${param.name}/${param.id}/Content`)
  );
  return (
    <>
      <Title
        image={`./${param.name}/${param.id}/`}
        title={repoter.title}
        subtitle={repoter.date}
      />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <Suspense fallback={<div>로딩중 ... </div>}>
              <Content />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
