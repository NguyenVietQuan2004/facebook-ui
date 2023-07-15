import classNames from 'classnames/bind';
import styles from './SugestedAccount.module.scss';
import AccountItem from './SugestedAccountItem';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccount({ className }) {
    const [accounts, setAccounts] = useState([]);
    useEffect(function () {
        fetch('http://localhost:3000/SuggestedAccount')
            .then((res) => res.json())
            .then((suggestedAccount) => {
                setAccounts(suggestedAccount);
            });
    }, []);
    return (
        <div
            className={cx('wrapper', {
                [className]: !!className,
            })}
        >
            <h3 className={cx('')}>
                <span>Suggested for you</span>
                <img
                    src="https://img5.thuthuatphanmem.vn/uploads/2021/07/17/icon-bong-bong-trai-tim_054623948.png"
                    alt=""
                />
                <img
                    src="https://img5.thuthuatphanmem.vn/uploads/2021/07/17/icon-bong-bong-trai-tim_054623948.png"
                    alt=""
                />
            </h3>
            {accounts.map((account) => {
                return (
                    <AccountItem key={account.id} nameUser={account.name} src={account.avatar} to={account.profile} />
                );
            })}
        </div>
    );
}

export default SuggestedAccount;
