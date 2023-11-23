import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
import { BlogPost } from './pages/BlogPost';
import { Props as BlogPostProps } from 'utils/types';
import { client } from './services/cms';

import { buildHtml } from './utils/buildHtml';

const app = express();

app
  .use(
    `/public`,
    express.static(path.join(__dirname, '../../../public'), {
      maxAge: 365 * 24 * 60 * 60 * 1000,
    })
  )
  .get('/blog/posts/:slug', async (req, res) => {
    try {
      const data = await client.getBlogPost<BlogPostProps>(req.params.slug);
      const html = buildHtml(<BlogPost {...data} />);
      res.status(200).header('Content-Type', 'text/html').send(html);
    } catch (error) {
      console.error('Error retrieving blog post:', error);
      res.status(500).send('Internal Server Error');
    }
  });

export const handler = serverless(app);
