import katex from 'katex';
import PropTypes from 'prop-types';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import { useMemo } from 'react';

export interface Props extends TypographyProps {
  block?: boolean;
  children: string;
}

/**
 * MathBase
 */
const MathBase = ({ block, children, ...props }: Props) => {
  const math = useMemo<string>(() => {
    return katex.renderToString(children);
  }, [children]);

  return (
    <Typography
      component={block ? 'div' : 'span'}
      dangerouslySetInnerHTML={{ __html: math }}
      variant="inherit"
      {...props}
    />
  );
};

MathBase.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default MathBase;
