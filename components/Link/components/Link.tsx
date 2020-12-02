import { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps } from '@material-ui/core/Link';
import NextLink from './NextComposedLink';
import PropTypes from 'prop-types';

interface Props extends LinkProps {
  naked: boolean;
}

/**
 * Link
 */
const Link = ({ naked, ...props }: Props & NextLinkProps) => {
  if (naked) {
    return <NextLink {...props} />;
  }

  return <MuiLink component={NextLink} {...(props as any)} />;
};

Link.defaultProps = {
  naked: false,
};

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
