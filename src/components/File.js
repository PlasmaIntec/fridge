import React, { Component } from 'react';

export default class File extends Component {
    constructor(props) {
        super(props);
        this.renameFileHandler = this.renameFileHandler.bind(this);
    }

    renameFileHandler() {
        const { file, handleRenameFile } = this.props;
        const newName = window.prompt('CHOOSE NEW NAME') || '';
        if (!newName.trim()) {
            return;
        }
        handleRenameFile(file.id, newName);
    }

    render() {
        const { file } = this.props;
        return (
            <div onClick={this.renameFileHandler}>
                {file.name}
            </div>
        )
    }
}