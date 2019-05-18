import * as React from 'react';
import AccountListSelect from "./AccountListSelect";
import Account from "./Account";

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

        console.log("Account ID : " + account.id);
    }

    public onClickButtonMenuLoad = () => {
        this.setState({activeView: 'l'});
    }

    public onClickButtonMenuView = () => {
        this.setState({activeView: 'v'});
    }

    public onClickButtonMenuManageAccount = () => {
        this.setState({activeView: 'ma'});
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

    public onUpdateAccount = (account) => {
        console.log("App -> onUpdateAccount: " + account);

        const data = new FormData();

        console.log(data);


        data.append('accountId', account.id);
        data.append('accountNumber', account.accountNumber);
        data.append('creationDate', account.creationDate);
        data.append('initialBalance', account.initialBalance);
        data.append('currentBalance', account.currentBalance);
        data.append('startPeriod', account.startPeriod);
        data.append('endPeriod', account.endPeriod);

       console.log('accountId' + account.id);
       console.log('accountNumber' + account.accountNumber);
       console.log('creationDate' + account.creationDate);
       console.log('initialBalance' + account.initialBalance);
       console.log('currentBalance' + account.currentBalance);
       console.log('startPeriod' + account.startPeriod);
       console.log('endPeriod' + account.endPeriod);

        // console.log("Data: " + data);

        fetch('http://localhost:8080/updateAccount',
            {
                method: 'POST',
                body: data
            }).then(
            response => response.json() // if the response is a JSON object
        ).then(
            success => console.log(success) // Handle the success response object
        ).catch(
            error => console.log(error) // Handle the error response object
        );
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
                        <Button variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={this.onClickButtonMenuManageAccount}
                        > Manage Account</Button>

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
                    {this.state.activeView === 'ma' && (
                        <Grid>
                            <AccountListSelect onSelect={this.handleSelectAccount}/>

                            <Account account={this.state.selectectAccount} onUpdateAccount={this.onUpdateAccount}/>
                            {console.log("'ma': selectectAccount.accountId:" +this.state.selectectAccount.id )}
                        </Grid>

                    )}

                </div>
            </div>
        )
    }

}

export default withStyles(styles)(App);
