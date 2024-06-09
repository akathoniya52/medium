import { Blog } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 pt-10 w-full max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-3xl font-semibold">{blog.title}</div>
            <div className="text-gray-400">Post on 2nd Dec 2023</div>
            <div className="pt-2">{blog.content}</div>
          </div>
          <div className="col-span-4 text-gray-600 text-lg">
            Author
            <div className="pr-4 flex items-center">
              <div className="pr-2">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold pt-2 ">
                  {blog.author.name || "Anonymous"}
                </div>
                <div>Random</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
