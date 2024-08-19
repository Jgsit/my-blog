import Link from "./Link";

function NavigationMenu() {
  return (
    <>
      <div className="navMenu">
        <nav>
          <Link text="Link" />
          <Link text="Link" />
          <Link text="Link" />
        </nav>
        <Link text="Link" />
      </div>
    </>
  );
}

export default NavigationMenu;
