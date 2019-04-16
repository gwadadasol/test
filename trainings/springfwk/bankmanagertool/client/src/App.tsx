import * as React from 'react';
// import './App.css';

import AccountListSelect from "./AccountListSelect";

import OperationList from "./OperationList";

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

// import FileLoader from "./FileLoader";

// import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts/lib/index';

// const data = [
//     {name: 'Mon', Visits: 2200, Orders: 3400},
//     {name: 'Tue', Visits: 1280, Orders: 2398},
//     {name: 'Wed', Visits: 5000, Orders: 4300},
//     {name: 'Thu', Visits: 4780, Orders: 2908},
//     {name: 'Fri', Visits: 5890, Orders: 4800},
//     {name: 'Sat', Visits: 4390, Orders: 3800},
//     {name: 'Sun', Visits: 4490, Orders: 4300},
// ];


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
        this.setState({ activeView: 'l' });
    }

    public onClickButtonMenuView = () => {
        this.setState({ activeView: 'v' });
    }

    public onClickButtonSumitFileSelection = (event) =>{
        console.log(event);

    };

    public render() {
        const initialBalance = this.state.initialBalance;
        const currentBalance = this.state.currentBalance;
        const operations = this.state.operations;
        const accountNumber = this.state.selectectAccount.accountNumber;
        const startPeriod = this.state.selectectAccount.startPeriod;
        const endPeriod = this.state.selectectAccount.endPeriod;

        const {classes} = this.props;


        if (this.state.activeView === 'l') {
            return (
                <div className="App">
                    <div>
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
                    </div>
                    <div>
                        {this.state.activeView}
                    </div>

                    <div>
                            <AccountListSelect onSelect={this.handleSelectAccount}/>
                    </div>
                    <div>

                        <OperationList currentBalance={currentBalance}
                                       initialBalance={initialBalance}
                                       operations={operations}
                                       accountNumber={accountNumber}
                                       startPeriod={startPeriod}
                                       endPeriod={endPeriod}
                        />

                    </div>
                    <div>
                        {/*// 99% per https://github.com/recharts/recharts/issues/172*/}
                        {/*<ResponsiveContainer width="99%" height={320}>*/}
                        {/*<LineChart data={data}>*/}
                        {/*<XAxis dataKey="name"/>*/}
                        {/*<YAxis/>*/}
                        {/*<CartesianGrid vertical={false} strokeDasharray="3 3"/>*/}
                        {/*<Tooltip/>*/}
                        {/*<Legend/>*/}
                        {/*<Line type="monotone" dataKey="Visits" stroke="#82ca9d"/>*/}
                        {/*<Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{r: 8}}/>*/}
                        {/*</LineChart>*/}
                        {/*</ResponsiveContainer>*/}


                    </div>
                </div>
            );
        }else if (this.state.activeView === 'v') {
            return (
                <div className="App">
                    <div>
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
                    </div>
                    <div>
                        {/*<FileLoader />*/}
                    </div>
                </div>

            );
        }
        else{
            return (
                <div className="App">
                    <div>
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
                    </div>
                    <div>
                        {this.state.activeView}
                    </div>
                </div>
            );

        }
    }

}

export default withStyles(styles)(App);
