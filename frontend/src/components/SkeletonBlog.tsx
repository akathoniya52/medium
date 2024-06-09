import { Avatar } from "./BlogCard";

const SkeletonBlog = () => {
  return (
    <div role="status" className=" animate-pulse flex justify-center">
      <div className="border-b border-slate-200 p-4 max-w-screen-md ">
        <div className="flex items-center">
          <Avatar name={"A"} size="small" />
          <div className="font-extralight pl-2 text-sm">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div className="pl-2 font-thin text-slate-500">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </div>
        <div className="text-xl font-semibold  pt-2">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
        <div className="font-thin pt-2">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
        <div className="text-slate-400 text-sm">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
      </div>
      
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonBlog;
