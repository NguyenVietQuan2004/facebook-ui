import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrappper } from '../index';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';
const cx = classNames.bind(styles);

function Menu({ children, items }) {
    const [list, setList] = useState([{ data: items }]);
    const currentMenu = list[list.length - 1];

    const changeMenu = (childrenMenu) => {
        setList((preList) => [...preList, childrenMenu]);
    };
    const handleBackMenu = () => {
        setList((preList) => preList.slice(0, preList.length - 1));
    };
    const handleResertMenu = () => {
        setList((preList) => preList.slice(0, 1));
    };

    // render list
    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.childrenMenu;
            if (isParent) {
                return <MenuItem key={index} data={item} onClick={() => changeMenu(item.childrenMenu)} />;
            }

            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            hideOnClick={false}
            onHide={handleResertMenu}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrappper>
                        {list.length > 1 && <Header title={'Language'} onBack={handleBackMenu} />}
                        {renderItems()}
                    </PopperWrappper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
