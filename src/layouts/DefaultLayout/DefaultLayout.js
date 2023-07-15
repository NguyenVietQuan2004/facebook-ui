import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar></Sidebar>
            <div className={cx('content')}>{children}</div>
            <Footer></Footer>
        </div>
    );
}
export default DefaultLayout;
