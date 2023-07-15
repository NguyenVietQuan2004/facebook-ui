import { forwardRef, useState } from 'react';
import { noImage } from '~/assets/imageStore';
import styles from './image.module.scss';
import classNames from 'classnames';

function Image({ src, alt, fallback: customFallback = noImage, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            alt={alt}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
            className={classNames(styles.wrapper, className)}
        />
    );
}
export default forwardRef(Image);
