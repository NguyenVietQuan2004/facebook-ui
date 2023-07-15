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

function StoryViewItemImage({
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
    const [inputValue, setInputValue] = useState('');
    const [sendText, setSendText] = useState(false);

    const itemActiveRef = useRef();

    const handleMuted = () => {
        setIsMute(!isMute);
    };
    const handleToggleHeart = () => {
        setIsTim(!isTim);
    };
    const handleTogglePlaying = () => {
        setIsPlaying(!isPlaying);
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
                    setIsPlaying(true);
                } else {
                    setIsPlaying(false);
                }
            };
            handleScrollIntoView();
        },

        [active],
    );
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
                        <div className={cx('progressWrap')}>{isPlaying && <div className={cx('progress')}></div>}</div>

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
            <img src={story} alt="" className={cx('StoryViewItemImage')} />
        </div>
    );
}

export default StoryViewItemImage;
