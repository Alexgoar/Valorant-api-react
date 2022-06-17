import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      <Outlet />
    </>
  )
};

export default Layout;