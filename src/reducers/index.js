var folderCount = 100; // TODO: CHANGE TO ZERO POST-TESTS
var fileCount = 100; // TODO: CHANGE TO ZERO POST-TESTS

const folders = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FOLDER':
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
                    files: [],
                    parent: action.parentFolderId
                }
            };
        case 'DELETE_FOLDER':
            var tempState = { ...state };
            var deleteFolder = tempState[action.folderId];
            var parentFolder = state[deleteFolder.parent];
            var deleteIndex = parentFolder.folders.indexOf(action.folderId);
            parentFolder.folders.splice(deleteIndex, 1);
            delete tempState[action.folderId];
            return {
                ...tempState
            };
        case 'RENAME_FOLDER':
            return {
                ...state,
                [action.oldFolderId]: {
                    ...state[action.oldFolderId],
                    name: action.newFolderName
                }
            };
        case 'ADD_FILE':
            return {
                ...state,
                [action.folderId]: {
                    ...state[action.folderId],
                    files: [
                        ...state[action.folderId].files,
                        fileCount
                    ]
                }
            };
        default:
            return state;
    }
}

const files = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FILE':
            return {
                ...state,
                [fileCount]: {
                    id: fileCount,
                    name: action.fileName
                }
            };
        case 'DELETE_FILE':
            var tempState = { ...state };
            delete tempState[action.fileId];
            return {
                ...tempState
            };
        case 'RENAME_FILE':
            return {
                ...state,
                [action.oldFileId]: {
                    ...state[action.oldFileId],
                    name: action.newFileName
                }
            };
        default:
            return state;
    }
}

export default (state = {}, action) => { // TODO: HANDLE DANGLING FILES AFTER DELETE_FILE
    switch (action.type) {
        case 'ADD_FOLDER':
            folderCount++;
        case 'DELETE_FOLDER':   
        case 'RENAME_FOLDER':
            return {
                ...state,
                folders: folders(state.folders, action)
            };
        case 'ADD_FILE':
            fileCount++;
            return {
                ...state,
                folders: folders(state.folders, action),
                files: files(state.files, action)
            };
        case 'DELETE_FILE':
        case 'RENAME_FILE':
            return {
                ...state,
                files: files(state.files, action)
            };
        default:
            return state;
    }
}