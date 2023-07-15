import classNames from 'classnames/bind';
import styles from './ViewStoryLayout.module.scss';

const cx = classNames.bind(styles);
function StoryView({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
export default StoryView;
