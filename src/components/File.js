import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        width: '100%',
        maxWidth: '40em',
        padding: '0.8em',
        borderLeft: '10px solid turquoise',
        backgroundColor: 'white',
        margin: '0.7em auto'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class File extends Component {
    renameFileHandler = () => {
        const { file, handleRenameFile } = this.props;
        const newName = window.prompt('RENAME FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleRenameFile(file.id, newName);
    }

    deleteFileHandler = () => {
        const { file, handleDeleteFile } = this.props;
        handleDeleteFile(file.id, file.parent);
    }

    render() {
        const { file, classes } = this.props;
        return (
            <Card className={classes.card} onDoubleClick={this.renameFileHandler}>
                <Typography variant="h5" component="h2">
                    {file.name} 
                </Typography>
                <Button onClick={this.deleteFileHandler} variant="contained" color="secondary" className={classes.button}>
                    DELETE
                </Button>
            </Card>
        )
    }
}

export default withStyles(styles)(File);