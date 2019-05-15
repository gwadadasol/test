import * as React from 'react';
import AccountListSelect from "./AccountListSelect";

import OperationList from "./OperationList";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import {withStyles} from '@material-ui/core/styles';

import FileLoader from "./FileLoader";
// import './App.css';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class App extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

        this.state = {
            activeAccountId: 0,
            activeView: '',
            operations: [],
            selectectAccount: [],
            filepath: ""
        };

        this.handleSelectAccount = this.handleSelectAccount.bind(this);
    }

    public handleSelectAccount(id, account) {
        this.setState({
            activeAccountId: account.id,
            currentBalance: account.currentBalance,
            initialBalance: account.initialBalance,
            operations: account.operations,
            selectectAccount: account
        });
    }

    public onClickButtonMenuLoad = () => {
        this.setState({activeView: 'l'});
    }

    public onClickButtonMenuView = () => {
        this.setState({activeView: 'v'});
    }

    public onClickButtonSumitFileSelection = (event) => {
        console.log(event);
    };

    public onSubmitFileLoader = (file) => {
        console.log("App -> onSubmitFileLoader: " + file);

        const data = new FormData();
        data.append('file', file);

        console.log(data);

        fetch('http://localhost:8080/uploadFile',
            {
                method: 'POST',
                body: data
                // ,
                // mode: 'no-cors' // ,
                // headers: {
                //     "Content-Type": "multipart/form-data",
                //
                // }
            }).then(
            response => response.json() // if the response is a JSON object
        ).then(
            success => console.log(success) // Handle the success response object
        ).catch(
            error => console.log(error) // Handle the error response object
        );
        // .then(response => response.json())
        // .then(value => console.log(value));

    }

    public render() {
        const initialBalance = this.state.initialBalance;
        const currentBalance = this.state.currentBalance;
        const operations = this.state.operations;
        const accountNumber = this.state.selectectAccount.accountNumber;
        const startPeriod = this.state.selectectAccount.startPeriod;
        const endPeriod = this.state.selectectAccount.endPeriod;
        const filepath = this.state.filepath;

        const {classes} = this.props;

        return (
            <div className="App">
                <div>
                    <Grid>

                        <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.onClickButtonMenuLoad}
                        > Show Accounts</Button>

                        <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.onClickButtonMenuView}
                        > Upload Data</Button>
                    </Grid>
                        {this.state.activeView === 'l' && (
                            <Grid>
                                <AccountListSelect onSelect={this.handleSelectAccount}/>

                                <OperationList currentBalance={currentBalance}
                                               initialBalance={initialBalance}
                                               operations={operations}
                                               accountNumber={accountNumber}
                                               startPeriod={startPeriod}
                                               endPeriod={endPeriod}
                                />
                            </Grid>

                        )}
                        {this.state.activeView === 'v' && (
                            <Grid>
                                <FileLoader onSubmit={this.onSubmitFileLoader}/>

                            </Grid>

                        )}
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(App);
