// export const LogoIcon = (
//
// );
export const LogoIcon = ({ width = '3rem', height = '3.2rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            className={'svg-inline--fa fa-snowflake ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="snowflake"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(45)">
                    <stop offset="0%" style={{ stopColor: 'rgb(58, 17, 173)' }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(20, 188, 121)' }} />
                </linearGradient>
            </defs>
            <path
                fill="url(#gradient)"
                d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"
            ></path>
        </svg>
    );
};
export const CollapseIcon = ({ width = '3.2rem', height = '3.2rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            className={`svg-inline--fa fa-bars Sidebar_iconMenu__7ToaB ` + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(45)">
                    <stop offset="0%" style={{ stopColor: 'rgb(58, 17, 173)' }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(20, 188, 121)' }} />
                </linearGradient>
            </defs>
            <path
                fill="url(#gradient)"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            ></path>
        </svg>
    );
};
export const BellIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            className={'x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 ' + className}
            viewBox="0 0 28 28"
            alt=""
            fill="rgba(0,0,0,1)"
            height={height}
            width={width}
        >
            <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
        </svg>
    );
};
export const SearchIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            className={'x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od ' + className}
            fill="rgba(0,0,0,1)"
            viewBox="0 0 16 16"
            height={height}
            width={width}
        >
            <g fillRule="evenodd" transform="translate(-448 -544)">
                <g fillRule="nonzero">
                    <path
                        d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                        transform="translate(448 544)"
                    ></path>
                    <path
                        d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                        transform="translate(448 544)"
                    ></path>
                    <path
                        d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                        transform="translate(448 544)"
                    ></path>
                    <path
                        d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                        transform="translate(448 544)"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export const BackIcon = ({ width = '3rem', height = '3rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            // width={width}
            // height={height}
            className={'svg-inline--fa fa-circle-chevron-left ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-chevron-left"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="#fff"
                d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"
            ></path>
        </svg>
    );
};
export const NextIcon = ({ width = '3rem', height = '3rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            width={width}
            height={height}
            className={'svg-inline--fa fa-circle-chevron-right ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="#fff"
                d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
            ></path>
        </svg>
    );
};

export const PauseIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            fill="#fff"
            viewBox="3 3 18 18"
            width="1em"
            height="1em"
            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv xxk0z11 xvy4d1p"
        >
            <path d="m18.477 12.906-9.711 5.919A1.148 1.148 0 0 1 7 17.919V6.081a1.148 1.148 0 0 1 1.766-.906l9.711 5.919a1.046 1.046 0 0 1 0 1.812z"></path>
        </svg>
    );
};
export const PlayIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            fill="#fff"
            viewBox="3 3 18 18"
            width="1em"
            height="1em"
            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv xxk0z11 xvy4d1p"
        >
            <rect x="7" y="5" width="4" height="14" rx="1.167"></rect>
            <rect x="13" y="5" width="4" height="14" rx="1.167"></rect>
        </svg>
    );
};
export const VolumeSlashIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            fill="#fff"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv xxk0z11 xvy4d1p"
        >
            <path d="M13.16 2.124a1.449 1.449 0 0 0-1.563.26l-4.346 4.1a.8.8 0 0 0-.251.58v9.921a.8.8 0 0 0 .255.585l4.35 4.054a1.438 1.438 0 0 0 .97.375 1.466 1.466 0 0 0 .585-.123A1.382 1.382 0 0 0 14 20.6V3.4a1.382 1.382 0 0 0-.84-1.276zM4.25 7A2.25 2.25 0 0 0 2 9.25v5.5A2.25 2.25 0 0 0 4.25 17h.35a.4.4 0 0 0 .4-.4V7.4a.4.4 0 0 0-.4-.4zM21.707 9.293a1 1 0 0 0-1.414 0L19 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L17.586 12l-1.293 1.293a1 1 0 1 0 1.414 1.414L19 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L20.414 12l1.293-1.293a1 1 0 0 0 0-1.414z"></path>
        </svg>
    );
};

export const VolumeIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            fill="#fff"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv xxk0z11 xvy4d1p"
        >
            <path d="M13.16 2.124a1.449 1.449 0 0 0-1.563.26l-4.346 4.1a.8.8 0 0 0-.251.58v9.921a.8.8 0 0 0 .255.585l4.35 4.054a1.438 1.438 0 0 0 .97.375 1.466 1.466 0 0 0 .585-.123A1.382 1.382 0 0 0 14 20.6V3.4a1.382 1.382 0 0 0-.84-1.276zM4.25 7A2.25 2.25 0 0 0 2 9.25v5.5A2.25 2.25 0 0 0 4.25 17h.35a.4.4 0 0 0 .4-.4V7.4a.4.4 0 0 0-.4-.4zM16.95 7.05a1 1 0 1 0-1.414 1.414 5.008 5.008 0 0 1 0 7.072 1 1 0 1 0 1.414 1.414 7.009 7.009 0 0 0 0-9.9z"></path>
            <path d="M18.364 4.222a1 1 0 0 0 0 1.414 9.01 9.01 0 0 1 0 12.728 1 1 0 1 0 1.414 1.414 11.012 11.012 0 0 0 0-15.556 1 1 0 0 0-1.414 0z"></path>
        </svg>
    );
};

export const MoreIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            className={'x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv xxk0z11 xvy4d1p ' + className}
            onClick={onClick}
            fill="#fff"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
        >
            <circle cx="12" cy="12" r="2.5"></circle>
            <circle cx="19.5" cy="12" r="2.5"></circle>
            <circle cx="4.5" cy="12" r="2.5"></circle>
        </svg>
    );
};

export const HeartedIcon = ({ width = '2.4rem', height = '2.4rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            width={width}
            height={height}
            className={'svg-inline--fa fa-heart ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="red"
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            ></path>
        </svg>
    );
};

export const HeartIcon = ({ width = '2.4rem', height = '2.4rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            // width={width}
            // height={height}
            className={'svg-inline--fa fa-heart ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="#fff"
                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            ></path>
        </svg>
    );
};
export const SendMessageIcon = ({ width = '1.6rem', height = '1.6rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            aria-label="Chia sẻ trực tiếp"
            className="x1lliihq x1n2onr6"
            color="rgb(255, 255, 255)"
            fill="rgb(255, 255, 255)"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
        >
            <title>Chia sẻ trực tiếp</title>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
            ></line>
            <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
            ></polygon>
        </svg>
    );
};
export const CloseIcon = ({ width = '4.4rem', height = '4.4rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            width={width}
            height={height}
            className={'svg-inline--fa fa-xmark ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="xmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
        >
            <path
                fill="#fff"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            ></path>
        </svg>
    );
};
export const GoogleIcon = ({ width = '2.4rem', height = '2.4rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            width={width}
            height={height}
            className={'svg-inline--fa fa-google ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
        >
            <linearGradient id="googleGradient" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="blue" />
                <stop offset="25%" stopColor="#34A853" />
                <stop offset="50%" stopColor="#FBBC05" />
                <stop offset="75%" stopColor="#EA4335" />
                <stop offset="100%" stopColor="blue" />
            </linearGradient>
            <path
                fill="url(#googleGradient)"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
        </svg>
    );
};
export const CommentIcon = ({ width = '2.4rem', height = '2.4rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            className={'svg-inline--fa fa-message ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="message"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -20 512 512"
        >
            <path
                fill="currentColor"
                d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
            ></path>
        </svg>
    );
};
export const ShareIcon = ({ width = '2.4rem', height = '2.4rem', className, onClick = () => {} }) => {
    return (
        <svg
            onClick={onClick}
            className={'svg-inline--fa fa-share ' + className}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="share"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path
                fill="currentColor"
                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
            ></path>
        </svg>
    );
};
