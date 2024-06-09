import { Link } from "react-router-dom";

interface blogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: blogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 p-4 max-w-screen-md cursor-pointer">
        <div className="flex items-center">
          <Avatar name={authorName} size="small" />
          <div className="font-extralight pl-2 text-sm">{authorName}</div>
          <div className="text-xs pl-2">&#9679;</div>
          <div className="pl-2 font-thin text-slate-500">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold  pt-2">{title}</div>
        <div className="font-thin pt-2">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-400 text-sm">
          {Math.ceil(content.length / 1000)}Minute(s) read.
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "h-6 w-6" : "h-10 w-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-thin text-gray-600  dark:text-gray-300 ${
          size === "small" ? "text-xs" : "text-md"
        }`}
      >
        {name[0]}
      </span>
    </div>
  );
}
