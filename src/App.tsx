import { BlogPost, Props as BlogProps } from './pages/BlogPost';
import ReactDOM from 'react-dom';

declare global {
  interface Window {
    ReactProps: BlogProps;
  }
}

ReactDOM.hydrate(
  <BlogPost {...window.ReactProps} />,
  document.getElementById('root')
);
