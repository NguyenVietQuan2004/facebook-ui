// import classNames from 'classnames/bind';
// import styles from './Menu.module.scss';
import Button from '~/components/Button/Button';

// const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button iconLeft={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}
export default MenuItem;
