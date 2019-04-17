import React, { Component } from 'react';
import ConnectedFolder from '../containers/Folder.js';
import ConnectedFile from '../containers/File.js';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '40em',
        padding: '0.8em',
        borderLeft: '10px solid red',
        backgroundColor: 'white',
        margin: '0.7em auto'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Folder extends Component {
    addFolderHandler = () => {
        const { folder, handleAddFolder } = this.props;
        const newName = window.prompt('ADD FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFolder(folder.id, newName);
    }

    renameFolderHandler = () => {
        const { folder, handleRenameFolder } = this.props;
        const newName = window.prompt('RENAME FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleRenameFolder(folder.id, newName);
    }

    deleteFolderHandler = () => {
        const { folder, handleDeleteFolder } = this.props;
        handleDeleteFolder(folder.id);
    }

    addFileHandler = () => {
        const { folder, handleAddFile } = this.props;
        const newName = window.prompt('ADD FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFile(folder.id, newName);
    }

    toggleShowContents = () => {
        const { folder, handleToggleShow } = this.props;
        handleToggleShow(folder.id, !folder.show);
    }

    render() {
        const { folder, files, classes } = this.props;
        return (
            <ExpansionPanel className={classes.root} expanded={folder.show} >
                <ExpansionPanelSummary onClick={this.toggleShowContents} expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" component="h2" onDoubleClick={this.renameFolderHandler}>
                        {`FOLDER ${folder.name} (${folder.id})`}
                    </Typography>
                </ExpansionPanelSummary>     
                <ExpansionPanelDetails className={classes.details}>    
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
                    <div>
                        <Button variant='contained' color='primary' className={classes.button} onClick={this.addFolderHandler}>+Folder</Button>
                        <Button variant='contained' color='primary' className={classes.button} onClick={this.addFileHandler}>+File</Button>
                        <Button variant='contained' color='secondary' className={classes.button} onClick={this.deleteFolderHandler}>DELETE</Button>
                    </div>                  
                </ExpansionPanelDetails>                   
            </ExpansionPanel>
        )
    }
}

export default withStyles(styles)(Folder);