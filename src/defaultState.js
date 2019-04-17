const defaultState = { 
    folders: {
        0: {
            id: 0,
            name: '__ROOT',
            folders: [1, 2],
            files: [],
            parent: null,
            show: false
        },
        1: {
            id: 1,
            name: 'Summer',
            folders: [],
            files: [1, 2],
            parent: 0,
            show: false
        },
        2: {
            id: 2,
            name: 'Winter',
            folders: [],
            files: [3],
            parent: 0,
            show: false
        }
    },
    files: {
        1: {
            id: 1,
            name: 'hot hot hot',
            parent: 1
        },
        2: {
            id: 2,
            name: 'shall i compare thee',
            parent: 1
        },
        3: {
            id: 3,
            name: 'polar',
            parent: 2
        }
    },
    showAll: false,
};

export default defaultState;