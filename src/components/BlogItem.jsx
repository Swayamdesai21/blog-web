import { useDispatch } from 'react-redux';
import { deleteBlog } from '../redux/blogSlice';

const BlogItem = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="mb-2">{blog.content}</p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => dispatch(deleteBlog(blog.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogItem;
