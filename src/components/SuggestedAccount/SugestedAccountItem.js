import classNames from 'classnames/bind';
import styles from './SugestedAccount.module.scss';
import { UserInfo } from '../UserInfo';

const cx = classNames.bind(styles);
function AccountItem({ nameUser, src, to }) {
    return (
        <div className={cx('accountItem')}>
            <UserInfo nameUser={nameUser} src={src} to={to} />
        </div>
    );
}

export default AccountItem;
