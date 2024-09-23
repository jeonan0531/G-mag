// export default {
//     name: "이지혁",
//     contents: {
//         1: {
//             title: "독일의 축구 더비 - 데어 클라시커",
//             date: "May 13, 2024",
//             content: "./1/...",
//             bgImage: "./1/..."
//         },
//         2: {
//             title: "분데스리가 그리고 대한민국",
//             date: "July 29, 2024",
//             content
//         }
//     }
// }

import post from "../createPost";

// export default {
//   name: "이지혁",
//   contents: {
//     1: post("독일의 축구 더비 - 데어 클라시커", "May 13, 2024", "", ""),
//     2: post("분데스리가 그리고 대한민국", "July 29, 2024", "", ""),
//   },
// };

export default {
  name: "이지혁",
  posts: [
    post(1, "독일의 축구 더비 - 데어 클라시커", "2024-05-13"),
    post(2, "분데스리가 그리고 대한민국", "2024-07-29"),
    post(3, "분데스리가 그리고 대한민국 2", "2024-09-23")
  ],
};
