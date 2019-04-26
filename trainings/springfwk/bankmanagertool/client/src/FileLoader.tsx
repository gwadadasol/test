import * as React from "react";

import Button from '@material-ui/core/Button';

import {Input, withStyles} from "@material-ui/core";

import {
    FormGroup,
    FormControl,
    InputLabel,
    FormControlLabel
} from "@material-ui/core";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class FileLoader extends React.Component<any,any>{

    private filePath;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.filePath = React.createRef<HTMLInputElement>();


    }

    private handleSubmit(event) {
        event.preventDefault();
        console.log( "FileLoader -> handleSubmit: " + event.target.titi.files[0]);
        console.log( this.filePath.current.files[0].name);
        this.props.onSubmit(event.target.titi.files[0]);
        this.filePath = event.target.titi.files[0].name;
    }





    public render() {
       const { classes } = this.props;
       //  const { submitSuccess, errors } = this.state;

        return (
            <div className="single-upload">
                <h3>Upload Single File</h3>
                <form id="singleUploadForm" name="singleUploadForm" onSubmit={this.handleSubmit}>

                    <input id="singleFileUploadInput" type="file" name="titi" className="file-input" required={true}  ref={this.filePath}/>

                    <Button variant="contained" type="submit"  className={classes.button}  >Submit</Button>


                </form>
                <div className="upload-response">
                    <div id="singleFileUploadError" />
                    <div id="singleFileUploadSuccess" />
                </div>
                {/*<form  onSubmit={this.handleSubmit}>*/}
                    {/*<FormGroup controlId='uploadFormId'>*/}
                        {/*<FormControl*/}
                            {/*type='file'*/}
                            {/*name="input-file"*/}
                            {/*label='File'*/}
                        {/*/>*/}
                    {/*</FormGroup>*/}
                    {/*<Button type='submit'>Upload</Button>*/}
                {/*</form>*/}


                {/*{submitSuccess && (*/}
                    {/*<div className="alert alert-info" role="alert">*/}
                        {/*The form was successfully submitted!*/}
                    {/*</div>*/}
                {/*)}*/}
                {/*{submitSuccess === false &&*/}
                {/*// !this.haveErrors(errors) &&*/}
                {/*(*/}
                    {/*<div className="alert alert-danger" role="alert">*/}
                        {/*Sorry, an unexpected error has occurred*/}
                    {/*</div>*/}
                {/*)}*/}
                {/*{submitSuccess === false &&*/}
                {/*this.haveErrors(errors) && (*/}
                    {/*<div className="alert alert-danger" role="alert">*/}
                        {/*Sorry, the form is invalid. Please review, adjust and try again*/}
                    {/*</div>*/}
                {/*)}*/}
            </div>


        );
    }
}

export default withStyles(styles)(FileLoader);