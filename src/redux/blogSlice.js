import { createSlice, nanoid } from '@reduxjs/toolkit';

// Load blogs from localStorage if available
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('blogs');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (blogs) => {
  try {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  } catch {
    // Fail silently
  }
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState: loadFromLocalStorage(),
  reducers: {
    addBlog: (state, action) => {
      const newBlog = { id: nanoid(), ...action.payload };
      state.push(newBlog);
      saveToLocalStorage(state);
    },
    deleteBlog: (state, action) => {
      const updated = state.filter(blog => blog.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    }
  }
});

export const { addBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
