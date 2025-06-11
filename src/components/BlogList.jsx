import { useSelector } from 'react-redux';
import BlogItem from './BlogItem';

const BlogList = () => {
  const blogs = useSelector(state => state.blogs);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {blogs.map(blog => <BlogItem key={blog.id} blog={blog} />)}
    </div>
  );
};

export default BlogList;
