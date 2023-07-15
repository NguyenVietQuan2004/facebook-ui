import styles from './Story.module.scss';
import classNames from 'classnames/bind';
import StoryItem from './StoryItem';
import { BackIcon, NextIcon } from '~/assets/icons/icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Story() {
    const wrapperRef = useRef();
    const [listStory, setListStory] = useState([]);

    useEffect(function () {
        fetch(' http://localhost:3000/SuggestedAccount')
            .then((res) => res.json())
            .then((storyYourFriend) => {
                setListStory(storyYourFriend);
            });
    }, []);

    const scrolltoPre = () => {
        wrapperRef.current.scrollBy({
            top: 0,
            left: -wrapperRef.current.offsetWidth + 300,
            behavior: 'smooth',
        });
    };
    const scrolltoNext = () => {
        wrapperRef.current.scrollBy({
            top: 0,
            left: wrapperRef.current.offsetWidth - 300,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('model')}>
            <button className={cx('BackIcon')} onClick={scrolltoPre}>
                <BackIcon />
            </button>
            <div className={cx('wrapper')} ref={wrapperRef}>
                {listStory.map((storyUser, index) => {
                    return (
                        <StoryItem
                            key={storyUser.id}
                            index={index}
                            src={storyUser.avatar}
                            nameUser={storyUser.name}
                            story={storyUser.story}
                            storyImage={storyUser.storyImage}
                        />
                    );
                })}
            </div>
            <button onClick={scrolltoNext} className={cx('NextIcon')}>
                <NextIcon />
            </button>
        </div>
    );
}

export default Story;
