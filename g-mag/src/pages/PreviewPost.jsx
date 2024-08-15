import { NavLink } from "react-router-dom";
import React from "react";
// export default function PreviewPost(props) {
//   const [imageSrc, setImageSrc] = useState(null);
//   // const src = `.${props.to.slice(5)}/배경1.png`;

//   useEffect(() => {
//     const loadImage = async () => {
//       try {
//         const importImage = await import(`.${props.to.slice(5)}/배경1.png`);
//         setImageSrc(importImage.default);
//       } catch (error) {
//         console.log("Error loading image: ", error);
//       }
//     };
//     loadImage();
//   }, [props.to]);

//   return (
//     <div class="post-preview">
//       <NavLink to={props.to}>
//         <h2 class="post-title">{props.title}</h2>
//       </NavLink>
//       <p class="post-meta">{props.meta}</p>
//       {/* <img src={imageSrc} alt="Preview" /> */}
//     </div>
//   );
// }

export default function PreviewPost(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
      <div className="card">
        <NavLink to={props.to}>
          {/* <img alt="card" src={require(`${props.bgImg}`)} className="card-img-top" /> */}
          <img
            alt="card"
            src={(() => {
              try {
                return require(`${props.bgImg}미리보기.png`);
              } catch (e) {
                try {
                  return require(`${props.bgImg}배경.png`);
                } catch (e) {
                  return "";
                }
                // return ""; // 이미지가 없을 땐 배경이미지 사용
              }
            })()}
            className="card-img-top"
          />

          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.meta}</p>
          </div>
        </NavLink>

        {/* <img src={imageSrc} alt="Preview" /> */}
      </div>
    </div>
  );
}
