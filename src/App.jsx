import Header from './components/Header';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';

const App = () => (
  <div className="min-h-screen">
    <Header />
    <AddBlog />
    <BlogList />
  </div>
);

export default App;
