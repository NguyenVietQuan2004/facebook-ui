import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import { Image } from '~/components/image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserInfo({ nameUser, src, to = '/', className, dayUpload }) {
    return (
        <Link
            className={cx('infoUser', {
                [className]: className,
            })}
            to={to}
        >
            <div className={cx('infoUserImage')}>
                <Image alt="avatar" src={src} />
            </div>
            <span>
                <h4>{nameUser}</h4>
                {dayUpload && <p>{dayUpload}</p>}
            </span>
        </Link>
    );
}

export default UserInfo;
