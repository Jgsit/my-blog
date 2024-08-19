import Title from "./Title";
import Baseline from "./Baseline";
function Header(props) {
  return (
    <header>
      <div className="container">
        <Title title={props.title} />
        <Baseline baseline={props.baseline} />
      </div>
    </header>
  );
}

export default Header;
