import uuid from 'uuid/v4'

const folders = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOLDER':
            return [
                ...state,
                {
                    id: uuid(),
                    name: action.folderName
                }
            ]
        case 'RENAME_FOLDER':
            return state.map(folder => {
                if (folder.id === action.oldFolderId) {
                    return {
                        id: folder.id,
                        name: action.newFolderName
                    }
                }
                return folder;
            })
        default:
            return state;
    }
}

export default folders