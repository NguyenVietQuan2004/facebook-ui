import { UserInfo } from '~/components/UserInfo';
import styles from './Upload.module.scss';
import classNames from 'classnames/bind';
import { getUser } from '~/components/redux/selector';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Upload({ className }) {
    const user = useSelector(getUser);
    return (
        <div
            className={cx('wrapper', {
                [className]: !!className,
            })}
        >
            <UserInfo src={user.avatar} />
            <div className={cx('wrapperInput')}>
                <input placeholder="What's on your mind, Quan?" />
            </div>
        </div>
    );
}

export default Upload;
