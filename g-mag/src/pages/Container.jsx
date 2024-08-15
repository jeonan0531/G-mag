// export default function Container(props) {
//   return (
//     <>
//       <div class="container px-4 px-lg-5">
//         <div class="row gx-4 gx-lg-5 justify-content-center">
//           <div class="col-md-10 col-lg-8 col-xl-7">{props.children}</div>
//         </div>
//       </div>
//     </>
//   );
// }
export default function Container(props) {
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 ">{props.children}</div>
      </div>
    </>
  );
}
