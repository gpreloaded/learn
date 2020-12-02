import Container from 'components/Container';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactElement;
}

/**
 * Wrapper
 */
const Wrapper = ({ children }: Props) => <Container>{children}</Container>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
