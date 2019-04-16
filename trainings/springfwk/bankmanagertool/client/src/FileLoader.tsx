import * as React from "react";

import Button from "./MainMenu";

import {withStyles} from "@material-ui/core";



const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class FileLoader extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

    }

    public render() {
        const { classes } = this.props;

        return (
            <div className="single-upload">
                <h3>Upload Single File</h3>
                <form id="singleUploadForm" name="singleUploadForm">
                    <input id="singleFileUploadInput" type="file" name="file" className="file-input" required={true} />
                    <button type="submit" className="primary submit-btn">Submit</button>
                </form>

                <div className="upload-response">
                    <div id="singleFileUploadError" />
                    <div id="singleFileUploadSuccess" />
                </div>
            </div>
    );
    }
}

export default withStyles(styles)(FileLoader);