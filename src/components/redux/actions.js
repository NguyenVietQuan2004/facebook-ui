export const addUserLogin = (payload) => {
    return {
        type: 'addUserLogin',
        payload,
    };
};

export const setCurrentIndexStory = (payload) => {
    return {
        type: 'setCurrentIndexStory',
        payload,
    };
};
export const setCurrentVideoPost = (payload) => {
    return {
        type: 'setCurrentVideoPost',
        payload,
    };
};
