import uuid from 'uuid/v4'

const files = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FILE':
            return [
                ...state,
                {
                    id: uuid(),
                    name: action.folderName
                }
            ]
        case 'RENAME_FILE':
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

export default files