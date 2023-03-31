import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ title }) => {
  return (
    <>
      <p className={css.message}>{title}</p>
    </>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;