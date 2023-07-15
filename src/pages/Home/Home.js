import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Story from './Story/Story';
import Upload from './Upload/Upload';
import { useSelector } from 'react-redux';
import { getUser } from '~/components/redux/selector';
import { Posts } from './Posts';

const cx = classNames.bind(styles);
function Home() {
    const user = useSelector(getUser);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1>Hello {user.name},</h1>
                <h3>Share somethings with your friends</h3>
            </div>
            <Story />
            <Upload />
            <Posts />
            <div className={cx('seemore')}>See more</div>
        </div>
    );
}

export default Home;
