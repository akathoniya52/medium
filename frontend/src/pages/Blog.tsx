import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import Spinner from "../components/Spinner";

const Blog = () => {
  const params = useParams();
  console.log(params);
  const { loading, blog } = useBlog({ id: params.id || "" });

  if (loading) {
    return (
     <div className="h-screen flex justify-center items-center">
      <Spinner/>
     </div>
    );
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
