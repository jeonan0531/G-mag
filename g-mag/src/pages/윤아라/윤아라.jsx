import post from "../createPost";

// export default {
//   name: "윤아라",
//   contents: {
//     1: post("독일은 자전거 교육이 의무라고?", "June 3, 2024", "", ""),
//   },
// };

export default {
  name: "윤아라",
  posts: [
    post(1, "독일은 자전거 교육이 의무라고?", "2024-06-03"),
    post(2, "독일의 동물보호법", "2024-08-19"),
    post(3, "독일의 환경정책 ‘Umweltzone’ 제도", "2024-10-14"),
  ],
};
