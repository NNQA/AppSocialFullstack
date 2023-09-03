import { navLinks } from "../../lib/Data/Navlink";
import LinkProps from "../UI/LinkProps";
import LinkHome from "../UI/LinkHome";
import classes from "./sidebar.module.css";
const Sidebar = (): JSX.Element => {
  return (
    <header id="sidebar" className={classes.headerSidebar}>
      <div>
        <section className={classes.sectionSidebar}>
          <div className={classes.linkHome}>
            <LinkHome
              href="Home"
              iconName={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.643 4.93701C22.808 5.30701 21.911 5.55701 20.968 5.67001C21.93 5.09401 22.668 4.18001 23.016 3.09201C22.116 3.62601 21.119 4.01401 20.058 4.22201C19.208 3.31801 17.998 2.75201 16.658 2.75201C14.086 2.75201 12 4.83801 12 7.41201C12 7.77601 12.042 8.13001 12.12 8.47201C8.24701 8.27701 4.81601 6.42201 2.51801 3.60401C2.11801 4.29401 1.88801 5.09401 1.88801 5.94601C1.88801 7.56201 2.71101 8.98901 3.96001 9.82401C3.19601 9.79901 2.47801 9.59001 1.85001 9.24101V9.30101C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95201C21.332 7.75201 21.327 7.55001 21.318 7.35001C22.228 6.69201 23.018 5.87301 23.641 4.94001L23.643 4.93701Z"
                    fill="white"
                  />
                </svg>
              }
              IconisActive={null}
              linkName=""
            ></LinkHome>
          </div>
          <nav>
            {navLinks.map(({ ...linkData }, index) => {
              return <LinkProps {...linkData} key={index}></LinkProps>;
            })}
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Sidebar;
//
