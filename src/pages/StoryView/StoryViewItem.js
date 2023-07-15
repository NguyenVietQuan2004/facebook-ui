import { useEffect, useRef, useState } from 'react';
import styles from './StoryView.module.scss';
import classNames from 'classnames/bind';
import { UserInfo } from '~/components/UserInfo';
import {
    HeartIcon,
    HeartedIcon,
    MoreIcon,
    PauseIcon,
    PlayIcon,
    SendMessageIcon,
    VolumeIcon,
    VolumeSlashIcon,
} from '~/assets/icons/icons';
import { BackIcon, NextIcon } from '~/assets/icons/icons';

const cx = classNames.bind(styles);

function StoryViewItem({
    active,
    src,
    nameUser,
    story,
    profile,
    onClick,
    onNextStory,
    onBackStory,
    currentIndex,
    lengthList,
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [isTim, setIsTim] = useState(false);
    const [progressWidth, setProgressWidth] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [sendText, setSendText] = useState(false);

    const videoRef = useRef();
    const itemActiveRef = useRef();
    const handleTogglePlaying = () => {
        if (!isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const handleMuted = () => {
        setIsMute(!isMute);
    };
    const handleToggleHeart = () => {
        setIsTim(!isTim);
    };

    const handleEndedVideo = () => {
        onNextStory();
    };

    useEffect(
        function () {
            const handleScrollIntoView = () => {
                if (itemActiveRef.current) {
                    itemActiveRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center',
                    });
                    videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                    setIsPlaying(false);
                }
            };
            handleScrollIntoView();
        },

        [active],
    );
    const progressValue = () => {
        setProgressWidth((videoRef.current.currentTime / videoRef.current.duration) * 100);
    };
    const handleSendText = () => {
        setSendText(true);
        setTimeout(() => {
            setSendText(false);
        }, 2500);
    };
    return (
        <div
            className={cx('StoryViewItem', {
                [styles.active]: active,
            })}
            ref={active ? itemActiveRef : null}
            onClick={onClick}
        >
            {active ? (
                <>
                    {currentIndex !== 0 && (
                        <BackIcon className={cx('backIcon')} width="3rem" height="3rem" onClick={onBackStory} />
                    )}
                    <div className={cx('wrapperHeader')}>
                        <div className={cx('progressWrap')}>
                            <div className={cx('progress')} style={{ width: progressWidth + '%' }}></div>
                        </div>

                        <div className={cx('header')}>
                            <UserInfo src={src} nameUser={nameUser} to={profile} />
                            <div>
                                {isPlaying ? (
                                    <PlayIcon onClick={handleTogglePlaying} />
                                ) : (
                                    <PauseIcon onClick={handleTogglePlaying} />
                                )}
                                {isMute ? (
                                    <VolumeSlashIcon onClick={handleMuted} />
                                ) : (
                                    <VolumeIcon onClick={handleMuted} />
                                )}

                                <MoreIcon />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wrapperFooter')}>
                        <input
                            placeholder="Comment..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            spellCheck={false}
                        />
                        {sendText && <span className={cx('textAnimation')}>{inputValue}</span>}
                        {!isTim ? (
                            <HeartIcon className={cx('HeartIcon')} onClick={handleToggleHeart} />
                        ) : (
                            <>
                                <HeartedIcon className={cx('HeartIcon')} onClick={handleToggleHeart} />
                                <HeartedIcon className={cx('heartAnimation')} />
                            </>
                        )}

                        <SendMessageIcon onClick={handleSendText} />
                    </div>
                    {currentIndex !== lengthList - 1 && (
                        <NextIcon className={cx('nextIcon')} width="3rem" height="3rem" onClick={onNextStory} />
                    )}
                </>
            ) : (
                <div className={cx('header')}>
                    <UserInfo src={src} nameUser={nameUser} to={'/story'} className={cx('custom')} />
                </div>
            )}
            <video
                src={story}
                muted={isMute}
                className={cx('video')}
                ref={videoRef}
                onEnded={handleEndedVideo}
                onTimeUpdate={progressValue}
            />
        </div>
    );
}

export default StoryViewItem;
