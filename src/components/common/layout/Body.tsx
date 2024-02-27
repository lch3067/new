import { Outlet } from "react-router-dom";
import "./Body.css";

function Body() {
  return (
    <main id="body">
      {/* <h2>Body 영역</h2> */}
      <Outlet />
    </main>
  );
}

export default Body;
