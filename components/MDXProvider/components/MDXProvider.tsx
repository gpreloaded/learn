import mdxComponents from '../mdxComponents';
import { MDXProvider as MDXProviderReact } from '@mdx-js/react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

interface Props {
  children: React.ReactNode;
}

/**
 * MDXProvider
 */
const MDXProvider = ({ children }: Props) => (
  <MDXProviderReact components={{ ...mdxComponents, wrapper: Wrapper }}>
    {children}
  </MDXProviderReact>
);

MDXProvider.propTypes = {
  children: PropTypes.node,
};

export default MDXProvider;
