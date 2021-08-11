import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-contentful';
import BarLoader from 'react-spinners/BarLoader';
import {
  useParams,
} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import blueSemiCircle from '../assets/blue-semicircle.svg';
import woman from '../assets/woman-about-middle.svg';

import styles from '../styles/blog.module.css';

function BlogPost() {
  const { slug } = useParams();

  const renderError = () =>
  // TODO: Send an error to SENTRY (
    (
      <div className="col-12">
        <h3 className="text-center">
          We&apos;ve had a
          {' '}
          <span>
            {' '}
            problem
            {' '}
          </span>
          {' '}
          loading that
          article.
        </h3>
        <div className="text-center">
          <Button variant="red" className="btn-lg" href="/blog">READ SOMETHING ELSE</Button>
        </div>
      </div>

    );
  const renderBlog = (data) => {
    if (data.length > 1) {
      const posts = data.map((post) => (
        <div className="col-12 col-md-4" key={post.sys.id}>
          <h1>{post.fields.title}</h1>
          <a className="link" href={`/blog/${post.fields.slug}`}>Read more</a>
        </div>
      ));
      return posts;
    }
    if (data.length === 1) {
      return (
        <div className="col-12">
          <h1>{data[0].fields.title}</h1>
          {documentToReactComponents(data[0].fields.content)}
        </div>
      );
    }

    return renderError();
  };

  return (
    <>
      <div className=" container-fluid flex-grow-1 p-0
    "
      >
        {' '}
        <div className="row mt-5 p-5">
          <div className="col-lg-6 my-auto col-12 position-relative d-flex flex-column">
            <h2 className="text-center">Blog</h2>
            <h1 className="text-center">
              The
              {' '}
              <span>Handbook</span>
            </h1>
            <h3 className="text-center">
              A collection of articles giving you the
              {' '}
              <span>basics</span>
              {' '}
              of tech product building.
            </h3>
          </div>
          <div className="col-12 pb-lg-0 py-5 col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src={blueSemiCircle}
              alt="Blue semi-circle background"
              className={`h-75 ${styles.blueSemiCircle}`}
            />
            <img
              src={woman}
              alt="Line drawing of a woman"
              className="d-block d-lg-none position-absolute"
            />
            <img
              src={woman}
              alt="Line drawing of a woman"
              className="d-none d-lg-block position-absolute"
            />
          </div>
        </div>
      </div>
      <Query
        contentType="blogPost"
        query={slug ? {
          'fields.slug[in]': `${slug}`,
        } : {}}
      >
        {({
          data, error, fetched, loading,
        }) => {
          if (loading || !fetched) {
            return (
              <BarLoader
                height={10}
                color="#031799"
                width="100%"
              />
            );
          }

          if (error || !data) {
            renderError();
          }
          return (
            <>
              <Helmet>
                <title>About | Techniclarity</title>
                <meta property="og:site_name" content="Blog | Techniclarity" />
                <meta name="twitter:title" content="Blog | Techniclarity" />
                <meta property="og:title" content="Blog | Techniclarity" />
                <meta name="description" content="The Handbook: Techniclarity's blog. " />
                <meta property="og:description" content="The Handbook: Techniclarity's blog. " />
                <meta name="twitter:description" content="The Handbook: Techniclarity's blog. " />
                <meta property="og:image" content={woman} />
                <meta name="twitter:image" content={woman} />
                <meta name="twitter:image:alt" content="Line drawing" />
                <meta property="og:url" content="techniclarity.co/blog" />
              </Helmet>
              <div className="container my-5">
                <div className="row my-5">
                  {
                  renderBlog(data.items.slice(0, 10))
                }
                </div>
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
}

export default BlogPost;
