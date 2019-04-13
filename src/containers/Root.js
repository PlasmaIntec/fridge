import { connect } from 'react-redux'
import { renameFolder } from '../actions/renameFolder'
import { addFolder } from '../actions/addFolder'
import { addFile } from '../actions/addFile'
import { 
    getFolder, 
    getFiles
} from '../selectors'

import Root from '../components/Root.js'

const mapStateToProps = (state) => ({
    folder: getFolder(state, 0),
    files: getFiles(state, 0)
})

const mapDispatchToProps = (dispatch) => ({
    handleAddFile: (folderId, fileName) => dispatch(addFile(folderId, fileName)),
    handleAddFolder: (folderId, fileName) => dispatch(addFolder(folderId, fileName)),
    handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName))
})

const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(Root)

export default ConnectedRoot