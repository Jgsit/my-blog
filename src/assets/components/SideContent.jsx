import AboutMe from "./AboutMe";
import image3 from "../images/image3.jpg";

function SideContent(props) {
  return (
    <div className="sideContent">
      <AboutMe
        title="ABOUT ME"
        picture={image3}
        description="Cras interdum pharetra felis eu faucibus."
      />
    </div>
  );
}

export default SideContent;
