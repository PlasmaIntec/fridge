import React, { Component } from 'react';
import ConnectedFolder from '../containers/Folder.js';
import ConnectedFile from '../containers/File.js';

import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
});

class Root extends Component {
    addFolderHandler = () => {
        const { folder, handleAddFolder } = this.props;
        const newName = window.prompt('ADD FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFolder(folder.id, newName);
    }

    addFileHandler = () => {
        const { folder, handleAddFile } = this.props;
        const newName = window.prompt('ADD FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFile(folder.id, newName);
    }

    toggleShowHandler = () => {
        const { handleToggleShowAll, showAll } = this.props;
        handleToggleShowAll(!showAll);
    }

    render() {
        const { folder, files, showAll, classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addFolderHandler}>+Folder</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addFileHandler}>+File</Button>
                <Button variant="contained" color="secondary" className={classnames(classes.button, classes.cssRoot)} onClick={this.toggleShowHandler}>{showAll ? 'COLLAPSE ALL' : 'SHOW ALL'}</Button>
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

export default withStyles(styles)(Root);