import { connect } from 'react-redux'
import { renameFolder } from '../actions/renameFolder'
import { addFolder } from '../actions/addFolder'
import { deleteFolder } from '../actions/deleteFolder'
import { addFile } from '../actions/addFile'
import { deleteFile } from '../actions/deleteFile'
import { 
    getFolder, 
    getFiles, 
    getDescendantFiles, 
    getDescendantFolders, 
    getParentFolder 
} from '../selectors'

import Folder from '../components/Folder.js'

const mapStateToProps = (state, ownProps) => ({
    folder: getFolder(state, +ownProps.id),
    files: getFiles(state, +ownProps.id),
    descendantFolders: getDescendantFolders(state, +ownProps.id),
    descendantFiles: getDescendantFiles(state, +ownProps.id),
    parent: getParentFolder(state, +ownProps.id)
})

const mapDispatchToProps = (dispatch) => ({
    handleAddFile: (folderId, fileName) => dispatch(addFile(folderId, fileName)),
    handleAddFolder: (folderId, fileName) => dispatch(addFolder(folderId, fileName)),
    deleteFolder: (folderId) => dispatch(deleteFolder(folderId)),
    deleteFile: (fileId) => dispatch(deleteFile(fileId)),
    handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName))
})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    handleDeleteFolder: (folderId) => {
        console.log(stateProps)
        stateProps.descendantFiles.forEach(id => {
            dispatchProps.deleteFile(id);
        })
        stateProps.descendantFolders.reduceRight((acc, id) => { // iterates right to left
            dispatchProps.deleteFolder(id);
            return null;
        }, 0) // need initial value in case of empty array
        dispatchProps.deleteFolder(folderId);
    }
})

const ConnectedFolder = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Folder)

export default ConnectedFolder