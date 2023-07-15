const initState = {
    userLogin: {
        id: 1,
        name: 'init',
        nameLogin: 'vietquan',
        password: 123456,
        avatar: 'https://img5.thuthuatphanmem.vn/uploads/2021/11/30/hinh-anh-meo-cute-chibi-ngau-nhat_095500531.jpg',
        profile: '/profile',
        story: 'https://f52-zvc.zdn.vn/7fb0257a2200c95e9011/661854895345021702',
    },
    currentIndexStory: 0,
    setCurrentVideoPost: 1,
};
function reducer(state = initState, action) {
    switch (action.type) {
        case 'addUserLogin':
            return {
                ...state,
                userLogin: action.payload,
            };
        case 'setCurrentIndexStory':
            return {
                ...state,
                currentIndexStory: action.payload,
            };
        case 'setCurrentVideoPost':
            return {
                ...state,
                setCurrentVideoPost: action.payload,
            };

        default:
            return state;
    }
}
export default reducer;
