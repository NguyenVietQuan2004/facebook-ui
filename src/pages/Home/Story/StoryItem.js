import { UserInfo } from '~/components/UserInfo';
import styles from './Story.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { setCurrentIndexStory } from '~/components/redux/actions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function StoryItem({ src, nameUser, story, index, storyImage }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChangeToViewStory = (index) => {
        dispatch(setCurrentIndexStory(index));
        navigate('/story');
    };
    return (
        <div className={cx('StoryItem')} onClick={() => handleChangeToViewStory(index)}>
            {story ? <video src={story} /> : <img alt="" src={storyImage} className={cx('storyImage')} />}
            <UserInfo src={src} nameUser={nameUser} className={cx('customUser')} />
        </div>
    );
}

export default StoryItem;
