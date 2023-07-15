import { UserInfo } from '~/components/UserInfo';
import styles from './Posts.module.scss';
import classNames from 'classnames/bind';
import { CommentIcon, HeartIcon, ShareIcon, HeartedIcon } from '~/assets/icons/icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function PostItemImage({ src, nameUser, dayUpload, to, contentPost, caption }) {
    const [isTim, setIsTim] = useState(false);

    const PostItemRef = useRef();

    const handleToggleHeart = () => {
        setIsTim(!isTim);
    };

    return (
        <div className={cx('PostItem')} ref={PostItemRef}>
            <UserInfo src={src} nameUser={nameUser} to={to} dayUpload={dayUpload} className={cx('customUser')} />
            <p className={cx('caption')}>{caption}</p>
            <div className={cx('contentImage')}>
                <img alt="" src={contentPost} />
            </div>
            <div className={cx('split')}></div>
            <div className={cx('actions')}>
                <span>
                    {!isTim ? (
                        <HeartIcon className={cx('iconAction')} onClick={handleToggleHeart} />
                    ) : (
                        <HeartedIcon className={cx('iconActionHearted')} onClick={handleToggleHeart} />
                    )}
                    12 Likes
                </span>
                <span>
                    <CommentIcon className={cx('iconAction')} />6 Comments
                </span>
                <span>
                    <ShareIcon className={cx('iconAction')} />
                    Share
                </span>
            </div>
        </div>
    );
}

export default PostItemImage;
