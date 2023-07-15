import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header-item')}>
            <Button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faCircleChevronLeft}></FontAwesomeIcon>
            </Button>
            <h3 className={cx('header-title')}>{title}</h3>
        </div>
    );
}
export default Header;
