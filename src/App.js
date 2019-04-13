import React from 'react'
import { connect } from 'react-redux'
import { addFolder } from './actions/addFolder'
import { getFolder } from './selectors'

import ConnectedFolder from './containers/Folder'
import './App.css';

const mapStateToProps = (state, ownProps) => ({
  folders: getFolder(state, 0)
})

const mapDispatchToProps = (dispatch) => ({
  handleAddFolder: (parentFolderId, folderName) => dispatch(addFolder(parentFolderId, folderName))
})

const App = ({ folders, handleAddFolder }) => {
  let input;
  return (
    <div className="App">
      <ConnectedFolder id={0} />
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        handleAddFolder(folders.id, input.value)
        input.value = ''
      }}>
        <input ref={node => { input = node }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)