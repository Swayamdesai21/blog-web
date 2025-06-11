import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../redux/blogSlice';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title && content) {
      dispatch(addBlog({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        className="w-full p-2 mb-2 border rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-2 border rounded"
        rows="4"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Add Blog
      </button>
    </form>
  );
};

export default AddBlog;
