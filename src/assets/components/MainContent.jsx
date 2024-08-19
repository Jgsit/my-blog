import Item from "./Item";
import picture1 from "../images/image1.jpg";
import picture2 from "../images/image2.jpg";

function MainContent(props) {
  return (
    <>
      <div className="mainContent">
        <Item
          name="item"
          title="TITLE HEADING"
          subTitle="Title description"
          picture={picture1}
          description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
        />
        <Item
          name="item"
          title="TITLE HEADING"
          subTitle="Title description"
          picture={picture2}
          description="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula."
        />
      </div>
    </>
  );
}

export default MainContent;
