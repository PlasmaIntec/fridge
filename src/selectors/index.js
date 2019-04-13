const getFolder = (state, id) => {
    return state.folders[id]
}

const getSubFolders = (state, id) => {
    const subFoldersArray = state.folders[id].folders
    return subFoldersArray.map(id => state.folders[id])
}

const getDescendantFolders = (state, id) => {
    return state.folders[id].folders.reduce((acc, childId) => (
        [ ...acc, childId, ...getDescendantFolders(state, childId) ]
    ), [])
}

const getParentFolder = (state, id) => {
    const folder = state.folders[id]
    return state.folders[folder.parent]
}

const getFiles = (state, id) => {
    return state.folders[id].files
}

const getFile = (state, id) => {
    return state.files[id]
}

const getDescendantFiles = (state, id) => {
    return state.folders[id].folders.reduce((acc, childId) => (
        [ ...acc, ...getDescendantFiles(state, childId) ]
    ), []).concat(state.folders[id].files)
}

export { 
    getFolder,
    getSubFolders,
    getDescendantFolders,
    getParentFolder,
    getFiles,
    getFile,
    getDescendantFiles
}