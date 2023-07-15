import { BackIcon, MoreIcon } from '~/assets/icons/icons';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPen } from '@fortawesome/free-solid-svg-icons';
import Upload from '../Home/Upload/Upload';
import PostItem from '../Home/Posts/PostItem';
import PostItemImage from '../Home/Posts/PostitemImage';
import { SuggestedAccount } from '~/components/SuggestedAccount';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUserLogin } from '~/components/redux/actions';
import { compressToBase64, decompressFromBase64 } from 'lz-string';

const cx = classNames.bind(styles);
function Profile() {
    const user = useSelector((state) => state.userLogin);
    const [listMyPost, setListMyPost] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3000/MyPost')
            .then((res) => res.json())
            .then((res) => {
                setListMyPost(res);
            });
    }, []);
    const handleUploadAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64Data = reader.result;
            fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    avatar: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/30/hinh-anh-meo-cute-chibi-ngau-nhat_095500531.jpg',
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    dispatch(addUserLogin(res));
                });
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('cover')}>
                {/* <BackIcon className={cx('backIcon')} /> */}
                <span className={cx('UploadCoverImg')}>Upload cover photo</span>
            </div>
            <div className={cx('header')}>
                <div className={cx('headerInfo')}>
                    <label className={cx('headerInfoimg')} htmlFor="uploadAvatar">
                        <img alt="" src={user.avatar} />
                        <input type="file" id="uploadAvatar" onChange={handleUploadAvatar} />
                    </label>

                    <div className={cx('headerDescription')}>
                        <h1>Quan</h1>
                        <p>3 friends</p>
                        <div className={cx('headerFriend')}>
                            <img
                                alt=""
                                src="https://tse1.mm.bing.net/th?id=OIP.-461KrbL81XaWn3zoq2CIAHaJQ&pid=Api&P=0&h=180"
                            />
                            <img
                                alt=""
                                src="https://tse2.mm.bing.net/th?id=OIP.n6XggU8IoyXc8EhpP_RCWQHaJ4&pid=Api&P=0&h=180"
                            />
                            <img
                                alt=""
                                src="https://tse1.mm.bing.net/th?id=OIP.-461KrbL81XaWn3zoq2CIAHaJQ&pid=Api&P=0&h=180"
                            />
                        </div>
                    </div>
                </div>

                <div className={cx('headerEdit')}>
                    <FontAwesomeIcon icon={faGear} className={cx('iconSetting')} />
                    edit profile
                </div>
            </div>
            {/* More */}
            <div className={cx('more')}>
                <div>
                    <span className={cx('active')}>Profile</span>
                    <span>Photo</span>
                </div>
                <div>
                    <MoreIcon className={cx('more-btn')} />
                </div>
            </div>
            {/* upload */}
            <div className={cx('upload')}>
                <Upload className={cx('customUpload')} />
                <div className={cx('introduce')}>
                    <div>Intro</div>

                    <div>
                        Hi i'm Quan <FontAwesomeIcon icon={faPen} className={cx('penIcon')} />{' '}
                    </div>
                </div>
            </div>

            {/* post */}
            <div className={cx('PostWrapper')}>
                <div className={cx('PostList')}>
                    {listMyPost.map((myPost) => {
                        if (myPost.post) {
                            return (
                                <PostItem
                                    key={myPost.id}
                                    src={myPost.avatar}
                                    nameUser={myPost.name}
                                    dayUpload={myPost.dayUploadPost}
                                    contentPost={myPost.post}
                                    caption={myPost.caption}
                                />
                            );
                        } else {
                            return (
                                <PostItemImage
                                    key={myPost.id}
                                    src={myPost.avatar}
                                    nameUser={myPost.name}
                                    dayUpload={myPost.dayUploadPost}
                                    contentPost={myPost.postImage}
                                    caption={myPost.caption}
                                />
                            );
                        }
                    })}
                </div>

                <SuggestedAccount className={cx('customSuggestedAccount')} />
            </div>
        </div>
    );
}

export default Profile;
