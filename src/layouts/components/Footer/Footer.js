import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { BellIcon, SearchIcon } from '~/assets/icons/icons';
import { Image } from '~/components/image';
import { SuggestedAccount } from '~/components/SuggestedAccount';
import { UserInfo } from '~/components/UserInfo';
import { Menu } from '~/components/Popper/Menu';
import { userMenu } from '~/components/UserMenu';
import { getUser } from '~/components/redux/selector';
import { useSelector } from 'react-redux';

// import { getUser } from '~/layouts/redux/selector';
// import { useSelector } from 'react-redux';
// const user = useSelector(getUser)
const cx = classNames.bind(styles);

function Footer() {
    const user = useSelector(getUser);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button className={cx('btn-seacrh', 'btn')}>
                    <SearchIcon className={cx('iconSearch')} />
                </button>
                <button className={cx('btn-bell', 'btn')}>
                    <BellIcon className={cx('iconBell')} />
                </button>
                <Menu items={userMenu}>
                    <div className={cx('avatarLogined')}>
                        <UserInfo src={user.avatar} />
                    </div>
                </Menu>
            </div>

            {/* Phần 2 */}
            <div className={cx('Trendingfeeds')}>
                <h3>
                    Trending feed
                    <img
                        alt=""
                        src="https://yeualo.com/wp-content/uploads/www_yeualo_com-Hinh-mat-cuoi-ngo-nghinh-vui-nhon-dep-nhat-20.jpg"
                    />
                </h3>
                <div className={cx('TrendingfeedsMainImg')}>
                    <Image alt="avatar" src={user.avatar} />
                </div>
                <UserInfo nameUser={user.name} src={user.avatar} to={user.profile} />
                <p>Hello my name is quan, i am from viet nam i love music and eat every thing in the world </p>
            </div>

            <SuggestedAccount />
        </div>
    );
}

export default Footer;
