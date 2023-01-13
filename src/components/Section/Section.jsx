import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-xl p-1">{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
