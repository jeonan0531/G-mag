import defaultImage from "../assets/배경.png";
export default function Title(props) {
  const { image = defaultImage } = props;
  const { heading = "post-heading" } = props;
  const { subheading = "subheading" } = props;
  const backgroundImage =
    image === defaultImage
      ? `url(${defaultImage})`
      : `url(${require(`${image}배경.png`)})`;
  return (
    // header 이렇게 지저분하게 하는것 보다 다른 방법은 없을까?
    <header className="masthead" style={{ backgroundImage }}>
      {/* {console.log(`${image}배경.png`)} */}
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className={heading}>
              <h1>{props.title}</h1>
              <span className={subheading}>{props.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
