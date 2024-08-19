import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemTitle from "./ItemTitle";

function AboutMe(props) {
  return (
    <div className="item">
      <ItemTitle title={props.title} />
      <ItemPicture picture={props.picture} />
      <ItemDescription description={props.description} />
    </div>
  );
}

export default AboutMe;
