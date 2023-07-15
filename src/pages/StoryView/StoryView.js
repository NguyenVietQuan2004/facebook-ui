import styles from './StoryView.module.scss';
import classNames from 'classnames/bind';
import StoryViewItem from './StoryViewItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { CloseIcon } from '~/assets/icons/icons';
import { useSelector } from 'react-redux';
import { getCurrentIndexStory } from '~/components/redux/selector';
import { useNavigate } from 'react-router-dom';
import StoryViewItemImage from './StoryViewItemImage';

const cx = classNames.bind(styles);

function StoryView() {
    const index1 = useSelector(getCurrentIndexStory);
    const [listStory, setListStory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(index1);
    const navigate = useNavigate();

    useEffect(function () {
        fetch(' http://localhost:3000/SuggestedAccount')
            .then((res) => res.json())
            .then((storyYourFriend) => {
                setListStory(storyYourFriend);
            });
    }, []);

    const handleActive = (index) => {
        setCurrentIndex(index);
    };
    const handleBackStory = () => {
        setCurrentIndex((pre) => {
            if (pre === 0) {
                return listStory.length - 1;
            }
            return pre - 1;
        });
    };
    const handleNextStory = () => {
        setCurrentIndex((pre) => {
            if (pre === listStory.length - 1) {
                return 0;
            }
            return pre + 1;
        });
    };
    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className={cx('wrapper')}>
            {listStory.map((storyUser, index) => {
                if (!!storyUser.story) {
                    return (
                        <StoryViewItem
                            key={storyUser.id}
                            currentIndex={currentIndex}
                            src={storyUser.avatar}
                            nameUser={storyUser.name}
                            story={storyUser.story}
                            profile={storyUser.profile}
                            active={currentIndex === index}
                            onClick={() => currentIndex !== index && handleActive(index)}
                            onNextStory={handleNextStory}
                            onBackStory={handleBackStory}
                            lengthList={listStory.length}
                        />
                    );
                } else {
                    return (
                        <StoryViewItemImage
                            key={storyUser.id}
                            currentIndex={currentIndex}
                            src={storyUser.avatar}
                            nameUser={storyUser.name}
                            story={storyUser.storyImage}
                            profile={storyUser.profile}
                            active={currentIndex === index}
                            onClick={() => currentIndex !== index && handleActive(index)}
                            onNextStory={handleNextStory}
                            onBackStory={handleBackStory}
                            lengthList={listStory.length}
                        />
                    );
                }
            })}
            <CloseIcon className={cx('closeIcon')} onClick={handleBackHome} />
        </div>
    );
}

export default StoryView;
