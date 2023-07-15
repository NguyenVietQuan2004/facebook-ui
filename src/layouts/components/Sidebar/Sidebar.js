import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faClockFour, faComments } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { LogoIcon, CollapseIcon } from '~/assets/icons/icons';
import { UserInfo } from '~/components/UserInfo';
import { useSelector } from 'react-redux';
import { getUser } from '~/components/redux/selector';

const cx = classNames.bind(styles);

function Sidebar() {
    const [isHover, setIsHover] = useState(false);
    const [isCollapse, setIsCollapse] = useState(true);
    const user = useSelector(getUser);

    function handleHover() {
        setIsHover(!isHover);
    }
    function handleCollapse() {
        setIsCollapse(!isCollapse);
    }

    return (
        <div
            className={cx('wrapper', {
                [styles.allowCollapse]: isCollapse,
                [styles.notallowCollapse]: !isCollapse,
            })}
            onMouseEnter={isCollapse ? handleHover : () => {}}
            onMouseLeave={isCollapse ? handleHover : () => {}}
        >
            {/* Header Components */}
            <div className={cx('header')}>
                {isHover && (
                    <Link to={config.routes.home} className={cx('Logo')}>
                        <LogoIcon className={cx('iconSnow')}></LogoIcon>
                        Babon
                    </Link>
                )}
                <Tippy content="Collapse" placement="bottom-end">
                    <button
                        className={cx('Collapse', {
                            [styles.iconMenuHide]: !isHover,
                            [styles.iconMenuShowBackground]: !isCollapse,
                        })}
                        onClick={handleCollapse}
                    >
                        <CollapseIcon className={cx('iconMenu')} />
                    </button>
                </Tippy>
            </div>

            {/* container Components */}
            <div className={cx('contentSidebar')}>
                {isHover ? (
                    <div className={cx('infoUserSidebar')}>
                        <UserInfo nameUser={user.name} src={user.avatar} to={user.profile} />
                    </div>
                ) : (
                    <div className={cx('infoUserHide')}>
                        <UserInfo src={user.avatar} />
                    </div>
                )}
                <div
                    className={cx('interact', {
                        [styles.interactHide]: !isHover,
                    })}
                >
                    <Link to={config.routes.home}>
                        <FontAwesomeIcon icon={faClockFour} className={cx('iconInteract')} />
                        {isHover && <span>Dashboard</span>}
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faUserGroup} className={cx('iconInteract')} />
                        {isHover && <span>Community</span>}
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faComments} className={cx('iconInteract')} />
                        {isHover && <span>Chat</span>}
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faGear} className={cx('iconInteract')} />
                        {isHover && <span>Settings</span>}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
