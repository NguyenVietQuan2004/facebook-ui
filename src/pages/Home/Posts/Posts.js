import styles from './Posts.module.scss';
import classNames from 'classnames/bind';
import PostItem from './PostItem';
import PostItemImage from './PostitemImage';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Posts() {
    const [listPost, setListPost] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/Posts')
            .then((res) => res.json())
            .then((res) => {
                setListPost(res);
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            {listPost.map((post) => {
                if (post.post) {
                    return (
                        <PostItem
                            key={post.id}
                            src={post.avatar}
                            nameUser={post.name}
                            to={post.profile}
                            dayUpload={post.dayUpload}
                            id={post.id}
                            contentPost={post.post}
                            caption={post.caption}
                        />
                    );
                } else {
                    return (
                        <PostItemImage
                            key={post.id}
                            src={post.avatar}
                            nameUser={post.name}
                            to={post.profile}
                            dayUpload={post.dayUpload}
                            id={post.id}
                            contentPost={post.postImage}
                            caption={post.caption}
                        />
                    );
                }
            })}
        </div>
    );
}

export default Posts;
