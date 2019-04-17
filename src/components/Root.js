import React, { Component } from 'react';
import ConnectedFolder from '../containers/Folder.js';
import ConnectedFile from '../containers/File.js';

import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    purple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
    green: {
        color: green[700],
        backgroundColor: pink[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
});

class Root extends Component {
    addFolderHandler = () => {
        const { handleAddFolder } = this.props;
        const newName = window.prompt('ADD FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFolder(newName);
    }

    addFileHandler = () => {
        const { handleAddFile } = this.props;
        const newName = window.prompt('ADD FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFile(newName);
    }

    toggleShowHandler = () => {
        const { handleToggleShowAll, showAll } = this.props;
        handleToggleShowAll(!showAll);
    }

    render() {
        const { folder, files, showAll, classes, handleAddRandomFolder } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addFolderHandler}>+Folder</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.addFileHandler}>+File</Button>
                <Button variant="contained" className={classnames(classes.button, classes.purple)} onClick={this.toggleShowHandler}>{showAll ? 'COLLAPSE ALL' : 'SHOW ALL'}</Button>
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
                <Button variant="contained" className={classnames(classes.button, classes.green)} onClick={handleAddRandomFolder}>CHAOS</Button>
            </div>
        )
    }
}

export default withStyles(styles)(Root);