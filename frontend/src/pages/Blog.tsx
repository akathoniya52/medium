import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

const Blog = () => {
  const {loading, blogs} = useBlogs();

  if(loading){
    return <div>Loading....!</div>
  }
  return (
    <div>
      <Appbar />

      <div className="flex justify-center">
        <div className="">
          {blogs?.map((blog)=>(
            <BlogCard
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate="7th July 2001"
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
