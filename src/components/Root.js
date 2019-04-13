import React, { Component } from 'react';
import ConnectedFolder from '../containers/Folder.js';
import ConnectedFile from '../containers/File.js';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.addFolderHandler = this.addFolderHandler.bind(this);
        this.addFileHandler = this.addFileHandler.bind(this);
    }

    addFolderHandler() {
        const { folder, handleAddFolder } = this.props;
        const newName = window.prompt('ADD FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFolder(folder.id, newName);
    }

    addFileHandler() {
        const { folder, handleAddFile } = this.props;
        const newName = window.prompt('ADD FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFile(folder.id, newName);
    }

    render() {
        const { folder, files } = this.props;
        return (
            <div>
                <button onClick={this.addFolderHandler}>+Folder</button>
                <button onClick={this.addFileHandler}>+File</button>
                {
                    folder && folder.folders.map(id => (
                        <ConnectedFolder key={id} id={id} />
                    ))
                }    
                {
                    files && files.map(id => (
                        <ConnectedFile key={id} id={id} />
                    ))
                }                
            </div>
        )
    }
}