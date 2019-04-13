var folderCount = 100; // TODO: CHANGE TO ZERO POST-TESTS

const folders = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FOLDER':
            folderCount++;
            return {
                ...state,
                [action.parentFolderId]: { // let parent know child has been added
                    ...state[action.parentFolderId],
                    folders: [
                        ...state[action.parentFolderId].folders,
                        folderCount
                    ]
                },
                [folderCount]: { // add child
                    id: folderCount,
                    name: action.folderName,
                    folders: [],
                    files: []
                }
            }
        case 'RENAME_FOLDER':
            return {
                ...state,
                [action.oldFolderId]: {
                    ...state[action.oldFolderId],
                    name: action.newFolderName
                }
            }
        default:
            return state;
    }
}

export default folders