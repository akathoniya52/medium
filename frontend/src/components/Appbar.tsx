import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-10 py-4 ">
      <Link to="/" className="cursor-pointer">
        {" "}
        Medium
      </Link>
      <div>
        <Link
          to='/publish'
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          New
        </Link>
        <Avatar name="Amit" size="big" />
      </div>
    </div>
  );
};

export default Appbar;
