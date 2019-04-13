const getFolder = (state, id) => {
    return state.folders[id]
}

const getSubFolders = (state, id) => {
    const subFoldersArray = state.folders[id].folders
    return subFoldersArray.map(id => state.folders[id])
}

const getFiles = (state, id) => {
    return state.folders[id].files
}

const getFile = (state, id) => {
    return state.files[id]
}

export { 
    getFolder,
    getSubFolders,
    getFiles,
    getFile
}