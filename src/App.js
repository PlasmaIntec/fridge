import React from 'react'
import { connect } from 'react-redux'
import { addFolder } from './actions/addFolder'

import Folder from './containers/Folder'
import './App.css';

const mapDispatchToProps = dispatch => ({
  handleAddFolder: (folderName) => dispatch(addFolder(folderName))
})

const mapStateToProps = state => ({
  folders: state.folders
})

const App = ({ folders, handleAddFolder }) => {
  let input;
  return (
    <div className="App">
      {
        folders && folders.map(folder => (
          <Folder key={folder.id} folder={folder} />
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
        <input ref={node => { input = node }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)