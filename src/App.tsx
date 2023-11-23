import { BlogPost } from './pages/BlogPost';
import ReactDOM from 'react-dom';

import { Props as BlogProps } from 'utils/types';
declare global {
  interface Window {
    ReactProps: BlogProps;
  }
}

ReactDOM.hydrate(
  <BlogPost {...window.ReactProps} />,
  document.getElementById('root')
);
