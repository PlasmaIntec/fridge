import React, { Component } from 'react';
import ConnectedFolder from '../containers/Folder.js';
import ConnectedFile from '../containers/File.js';

export default class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContents: false
        };
        this.toggleShowContents = this.toggleShowContents.bind(this);
        this.renameFolderHandler = this.renameFolderHandler.bind(this);
    }

    renameFolderHandler(e) {
        const { folder, handleRenameFolder } = this.props;
        const newName = window.prompt('CHOOSE NEW NAME') || '';
        if (!newName.trim()) {
            return;
        }
        handleRenameFolder(folder.id, newName);
    }

    toggleShowContents() {
        this.setState({ showContents: !this.state.showContents })
    }

    render() {
        const { showContents } = this.state;
        const { folder, files } = this.props;
        return (
            <div>
                <div onClick={this.toggleShowContents} onDoubleClick={this.renameFolderHandler}>
                    {folder.name}
                </div>
                <button onClick={e => console.log(folder)}>+Folder</button>
                {
                    showContents && folder && folder.folders.map(id => (
                        <ConnectedFolder key={id} id={id} />
                    ))
                }    
                {
                    showContents && files && files.map(id => (
                        <ConnectedFile key={id} id={id} />
                    ))
                }    
                
            </div>
        )
    }
}