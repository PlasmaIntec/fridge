import { connect } from 'react-redux'
import { getFile } from '../selectors'

import File from '../components/File.js'

const mapStateToProps = (state, ownProps) => ({
    file: getFile(state, +ownProps.id)
})

const mapDispatchToProps = (dispatch) => ({
    
})

const ConnectedFile = connect(mapStateToProps, mapDispatchToProps)(File)

export default ConnectedFile