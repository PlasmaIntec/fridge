import { connect } from 'react-redux'
import { renameFolder } from '../actions/renameFolder'
import { addFolder } from '../actions/addFolder'
import { showFolder } from '../actions/showFolder'
import { addFile } from '../actions/addFile'
import { showAll } from '../actions/showAll'
import { 
    getFolder, 
    getFiles,
    getDescendantFiles,
    getDescendantFolders
} from '../selectors'

import Root from '../components/Root.js'

import faker from 'faker';

const mapStateToProps = (state) => ({
    folder: getFolder(state, 0),
    files: getFiles(state, 0),
    descendantFolders: getDescendantFolders(state, 0),
    descendantFiles: getDescendantFiles(state, 0),
    showAll: state.showAll
})

const mapDispatchToProps = (dispatch) => ({
    handleAddFile: (fileName) => dispatch(addFile(0, fileName)),
    handleAddFolder: (fileName) => dispatch(addFolder(0, fileName)),
    handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName)),
    showFolder: (folderId, status) => dispatch(showFolder(folderId, status)),
    toggleShowAll: (status) => dispatch(showAll(status)) 
})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    handleAddRandomFolder: () => {
        dispatchProps.handleAddFolder(faker.random.word());
    },
    handleToggleShowAll: (status) => {
        stateProps.descendantFolders.forEach(folder => {
            dispatchProps.showFolder(folder, status)
        });
        dispatchProps.toggleShowAll(status);
    }
})

const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Root)

export default ConnectedRoot