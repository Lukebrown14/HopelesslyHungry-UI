import { CATEGORY_LIST } from "../utils/Constant";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar text-stone-900">
      <div className="flex-1 navbar-center">
        <Link to="/">
          <a className="btn btn-ghost text-4xl underline decoration-wavy decoration-orange-600">
            Hopelessly Hungry
          </a>
        </Link>
      </div>

      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-2xl">Link</a>
          </li>
          <li>
            <details>
              <summary className="text-2xl">Category</summary>
              <ul className="bg-orange-600 text-xl rounded-t-none p-2">
                {CATEGORY_LIST.map((cat, i) => (
                  <li key={i}>
                    <a key={i}>{cat}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
