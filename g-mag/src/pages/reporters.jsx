import 김리현 from "./김리현/김리현";
import 김수현 from "./김수현/김수현";
import 문하연 from "./문하연/문하연";
import 박다연 from "./박다연/박다연";
import 박보현 from "./박보현/박보현";
import 박채은 from "./박채은/박채은";
import 유건희 from "./유건희/유건희";
import 윤아라 from "./윤아라/윤아라";
import 이주현 from "./이주현/이주현";
import 이지혁 from "./이지혁/이지혁";
import 전우빈 from "./전우빈/전우빈";
import 최장훈 from "./최장훈/최장훈";
import 호재원 from "./호재원/호재원";

// 여러 import를 좀 더 단순화 하는법?
// export default function reporters() {
//   // let repoters = ['김리현', '김수현', '문하연', '박다연', '박보현', '유건희', '윤아라', '이주현', '이지혁', '전우빈', '호재원'];
//   let reporters = ['김리현', '김수현', '문하연', '박다연', '박보현', '윤아라', '이주현', '이지혁'];
//   // let reporters = ['이지혁'];
//   let reportersMap = {
//     '김리현': 김리현,
//     '김수현': 김수현,
//     '문하연': 문하연,
//     '박다연': 박다연,
//     '박보현': 박보현,
//     '유건희': 유건희,
//     '윤아라': 윤아라,
//     '이주현': 이주현,
//     '이지혁': 이지혁,
//     '전우빈': 전우빈,
//     '호재원': 호재원
//   };
//   let allPosts = [];
//   reporters.map((reporter) => {
//     let reporterObj = reportersMap[reporter];
//     allPosts = [
//       ...allPosts,
//       ...reporterObj.posts.map((post) => ({ ...post, reporter: reporter })),
//     ];
//   });
//   // let allPosts = [
//   //   ...이지혁.posts.map((post) => ({ ...post, reporter: 이지혁.name })),
//   //   ...윤아라.posts.map((post) => ({ ...post, reporter: 윤아라.name })),
//   // ];
//   let sortedPosts = allPosts.sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );
//   console.log(sortedPosts);
//   return sortedPosts;
//   // return (
//   //   // <div className="row">
//   //   //   {sortedPosts.map((post, index) => (
//   //   //     <PreviewPost
//   //   //       key={index}
//   //   //       to={`/post/${post.reporter}/${post.id}`}
//   //   //       title={post.title}
//   //   //       meta={post.date}
//   //   //       bgImg={`./${post.reporter}/${post.id}/배경.png`}
//   //   //     />
//   //   //   ))}
//   //   // </div>
//   //   // sortedPosts
//   // );
// }

let reporters = [
  "김리현",
  "김수현",
  "문하연",
  "박다연",
  "박채은",
  "박보현",
  "유건희",
  "윤아라",
  "이주현",
  "이지혁",
  "전우빈",
  "최장훈",
  "호재원",
];

// prettier-ignore
let reportersMap = {
    '김리현': 김리현,
    '김수현': 김수현,
    '문하연': 문하연,
    '박다연': 박다연,
    '박보현': 박보현,
    '박채은': 박채은,
    '유건희': 유건희,
    '윤아라': 윤아라,
    '이주현': 이주현,
    '이지혁': 이지혁,
    '전우빈': 전우빈,
    '최장훈': 최장훈,
    '호재원': 호재원
  };
let allPosts = [];
reporters.map((reporter) => {
  let reporterObj = reportersMap[reporter];
  allPosts = [
    ...allPosts,
    ...reporterObj.posts.map((post) => ({ ...post, reporter: reporter })),
  ];
  return allPosts;
});
let sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default sortedPosts;
