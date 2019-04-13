import { connect } from 'react-redux'
import { renameFile } from '../actions/renameFile'
import { getFile } from '../selectors'

import File from '../components/File.js'

const mapStateToProps = (state, ownProps) => ({
    file: getFile(state, +ownProps.id)
})

const mapDispatchToProps = (dispatch) => ({
    handleRenameFile: (fileId, newFileName) => dispatch(renameFile(fileId, newFileName))    
})

const ConnectedFile = connect(mapStateToProps, mapDispatchToProps)(File)

export default ConnectedFile