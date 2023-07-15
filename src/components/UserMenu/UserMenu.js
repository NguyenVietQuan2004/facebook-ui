import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

export const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        childrenMenu: {
            data: [
                {
                    title: 'English1',
                    code: 'en',
                    childrenMenu: {
                        data: [
                            {
                                title: 'Enfgdfgfhjiu',
                                code: 'en',
                            },
                            {
                                title: 'Vietnamese',
                                code: 'vi',
                            },

                            {
                                title: 'Arrap se ut',
                                code: 'hi',
                            },
                        ],
                    },
                },
                {
                    title: 'Vietnamese',
                    code: 'vi',
                },

                {
                    title: 'Arrap se ut',
                    code: 'hi',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

export const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/login',
        separate: true,
    },
];
