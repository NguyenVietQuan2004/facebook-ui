import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

function Button({ to, className, iconLeft, iconRight, href, onClick, children, ...passProps }, ref) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
    });

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} ref={ref} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('content')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp>
    );
}
export default forwardRef(Button);
