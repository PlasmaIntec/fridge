import React from 'react';
import { connect } from 'react-redux'
import { renameFolder } from '../actions/renameFolder'

const mapDispatchToProps = (dispatch) => ({
    handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName))
})

const Folder = ({ folder, handleRenameFolder }) => (
    <div onDoubleClick={(e) => {
        var newName = window.prompt('CHOOSE NEW NAME') || ''
        if (!newName.trim()) {
            return
        }
        handleRenameFolder(folder.id, newName)
    }}>
        {folder.name}
    </div>
)

export default connect(null, mapDispatchToProps)(Folder)