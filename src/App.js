import React from 'react'
import { connect } from 'react-redux'
import { addFolder } from './actions/addFolder'
import { renameFolder } from './actions/renameFolder'

import Folder from './containers/Folders'
import './App.css';

const mapDispatchToProps = dispatch => ({
  handleAddFolder: (folderName) => dispatch(addFolder(folderName)),
  handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName))
})

const mapStateToProps = state => ({
  ...state
})

const App = ({ folders, handleAddFolder }) => {
  let input;
  return (
    <div className="App">
      {
        folders && folders.map(folder => (
          <div key={folder.id}>
            {folder.name}
          </div>
        ))
      }
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        handleAddFolder(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);