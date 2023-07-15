import { UserInfo } from '~/components/UserInfo';
import styles from './Posts.module.scss';
import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, ShareIcon, HeartedIcon, CloseIcon } from '~/assets/icons/icons';
import { useEffect, useRef, useState } from 'react';
import { setCurrentVideoPost } from '~/components/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function PostItem({ src, nameUser, dayUpload, to, id, contentPost, caption }) {
    const [isTim, setIsTim] = useState(false);
    const [isPause, setIsPause] = useState(true);
    const [isShowVisibility, setIsShowVisibility] = useState(false);
    const [currentTimeVideo, setCurrentTimeVideo] = useState(0);
    const dispatch = useDispatch();
    const CurrentVideoPost = useSelector((state) => state.setCurrentVideoPost);

    const PostItemRef = useRef();
    const videoRef = useRef();
    const videoVisibilityRef = useRef();

    const handleToggleHeart = () => {
        setIsTim(!isTim);
    };
    const handleScroll = function () {
        const { top, bottom } = videoRef.current.getBoundingClientRect();
        if (top >= -300 && bottom <= window.innerHeight + 100 && !isPause) {
            if (isShowVisibility) {
                videoRef.current.pause();
            }
        } else if (!isPause) {
            if (top < -300) {
                setIsShowVisibility(true);
            }

            videoRef.current.pause();
        }
    };

    useEffect(() => {
        const HomeNode = videoRef.current.parentNode.parentNode.parentNode.parentNode;
        HomeNode.addEventListener('scroll', handleScroll);
        return () => {
            HomeNode.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPause]);
    useEffect(() => {
        if (isShowVisibility) {
            console.dir(videoVisibilityRef.current);
            videoVisibilityRef.current.currentTime = currentTimeVideo;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShowVisibility]);

    return (
        <div className={cx('PostItem')} ref={PostItemRef}>
            {CurrentVideoPost === id && isShowVisibility && (
                <div className={cx('visibilityVideo')}>
                    <CloseIcon className={cx('closeIcon')} onClick={() => setIsShowVisibility(false)} />
                    <video src={contentPost} autoPlay ref={videoVisibilityRef} />
                </div>
            )}
            <UserInfo src={src} nameUser={nameUser} to={to} dayUpload={dayUpload} className={cx('customUser')} />
            <p className={cx('caption')}>{caption}</p>
            <div className={cx('content')}>
                <video
                    src={contentPost}
                    controls
                    ref={videoRef}
                    onPause={() => setIsPause(true)}
                    onPlay={() => {
                        setIsPause(false);
                        dispatch(setCurrentVideoPost(id));
                    }}
                    onTimeUpdate={(e) => setCurrentTimeVideo(e.target.currentTime)}
                />
            </div>
            <div className={cx('split')}></div>
            <div className={cx('actions')}>
                <span>
                    {!isTim ? (
                        <HeartIcon className={cx('iconAction')} onClick={handleToggleHeart} />
                    ) : (
                        <HeartedIcon className={cx('iconActionHearted')} onClick={handleToggleHeart} />
                    )}
                    23 Likes
                </span>
                <span>
                    <CommentIcon className={cx('iconAction')} />2 Comments
                </span>
                <span>
                    <ShareIcon className={cx('iconAction')} />
                    Share
                </span>
            </div>
        </div>
    );
}

export default PostItem;
