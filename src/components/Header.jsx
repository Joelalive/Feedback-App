import PropTypes from 'prop-types';

function Header({title}) {
  return (<div>
    {title}
  </div>);
}

Header.defaultProps = {
  title: 'Feedback UI'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;

