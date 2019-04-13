import { connect } from 'react-redux'
import { renameFolder } from '../actions/renameFolder'
import { addFolder } from '../actions/addFolder'
import { addFile } from '../actions/addFile'
import { getFolder, getFiles } from '../selectors'

import Folder from '../components/Folder.js'

const mapStateToProps = (state, ownProps) => ({
    folder: getFolder(state, +ownProps.id),
    files: getFiles(state, +ownProps.id)
})

const mapDispatchToProps = (dispatch) => ({
    handleAddFile: (folderId, fileName) => dispatch(addFile(folderId, fileName)),
    handleAddFolder: (folderId, fileName) => dispatch(addFolder(folderId, fileName)),
    handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName))
})

const ConnectedFolder = connect(mapStateToProps, mapDispatchToProps)(Folder)

export default ConnectedFolder