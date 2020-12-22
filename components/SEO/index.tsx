import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

interface Props {
  description: string;
  image: string;
  keywords: string;
  title: string;
}

/**
 * SEOMeta
 */
const SEOMeta = ({ description, image, keywords, title: titleProp }: Props) => {
  const router = useRouter();
  const title = titleProp
    ? `${titleProp} - ${process.env.brandName}`
    : process.env.brandName;

  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta
        key="twitter:site"
        name="twitter:site"
        content={process.env.siteName}
      />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={image} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:url"
        property="og:url"
        content={`${process.env.siteUrl}${router.asPath}`}
      />
      {description && (
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
      )}
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:ttl" property="og:ttl" content="604800" />
      <meta key="keywords" name="keywords" content={keywords} />
    </Head>
  );
};

SEOMeta.defaultProps = {
  description: process.env.siteDescription,
  image: process.env.logo,
  keywords: process.env.keywords,
};

SEOMeta.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
};

export default SEOMeta;
