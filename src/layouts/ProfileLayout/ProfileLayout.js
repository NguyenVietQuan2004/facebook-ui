import classNames from 'classnames/bind';
import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);
function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
export default ProfileLayout;
