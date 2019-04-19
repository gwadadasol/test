import * as React from 'react';
// import './App.css';

import AccountListSelect from "./AccountListSelect";

import OperationList from "./OperationList";

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import FileLoader from "./FileLoader";


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
        this.setState({ activeView: 'l' });
    }

    public onClickButtonMenuView = () => {
        this.setState({ activeView: 'v' });
    }

    public onClickButtonSumitFileSelection = (event) =>{
        console.log(event);
    };

    public onSubmitFileLoader = (file) =>{
        console.log("App -> onSubmitFileLoader: " + file);

        const   data = new FormData();
        data.append("file", file);

        fetch('http://localhost:8080/uploadFile', {
            method: 'POST',
            body: data,
            mode: 'no-cors',
            headers:{
                "Content-Type": "multipart/form-data",

            }
        });
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


        // if (this.state.activeView === 'l') {
        //     return (
        //         <div className="App">
        //             <div>
        //                 <Button variant="contained"
        //                         color="primary"
        //                         className={classes.button}
        //                         onClick={this.onClickButtonMenuLoad}
        //                 > Show Accounts</Button>
        //
        //                 <Button variant="contained"
        //                         color="primary"
        //                         className={classes.button}
        //                         onClick={this.onClickButtonMenuView}
        //                 > Upload Data</Button>
        //             </div>
        //             <div>
        //                 {this.state.activeView}
        //             </div>
        //
        //             <div>
        //                 <AccountListSelect onSelect={this.handleSelectAccount}/>
        //             </div>
        //             <div>
        //
        //                 <OperationList currentBalance={currentBalance}
        //                                initialBalance={initialBalance}
        //                                operations={operations}
        //                                accountNumber={accountNumber}
        //                                startPeriod={startPeriod}
        //                                endPeriod={endPeriod}
        //                 />
        //
        //             </div>
        //             <div>
        //                 {/*// 99% per https://github.com/recharts/recharts/issues/172*/}
        //                 {/*<ResponsiveContainer width="99%" height={320}>*/}
        //                 {/*<LineChart data={data}>*/}
        //                 {/*<XAxis dataKey="name"/>*/}
        //                 {/*<YAxis/>*/}
        //                 {/*<CartesianGrid vertical={false} strokeDasharray="3 3"/>*/}
        //                 {/*<Tooltip/>*/}
        //                 {/*<Legend/>*/}
        //                 {/*<Line type="monotone" dataKey="Visits" stroke="#82ca9d"/>*/}
        //                 {/*<Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{r: 8}}/>*/}
        //                 {/*</LineChart>*/}
        //                 {/*</ResponsiveContainer>*/}
        //
        //
        //             </div>
        //         </div>
        //     );
        // }else if (this.state.activeView === 'v') {
        //     return (
        //         <div className="App">
        //             <div>
        //                 <Button variant="contained"
        //                         color="primary"
        //                         className={classes.button}
        //                         onClick={this.onClickButtonMenuLoad}
        //                 > Show Accounts</Button>
        //
        //                 <Button variant="contained"
        //                         color="primary"
        //                         className={classes.button}
        //                         onClick={this.onClickButtonMenuView}
        //                 > Upload Data</Button>
        //             </div>
        //             <div>
        //                 <FileLoader />
        //             </div>
        //         </div>
        //
        //     );
        // }
        // else{
        //     return (
        //         <div className="App">
        //             <div>
        //                 <Button variant="contained"
        //                         color="primary"
        //                         className={classes.button}
        //                         onClick={this.onClickButtonMenuLoad}
        //                 > Show Accounts</Button>
        //
        //                 <Button variant="contained"
        //                         color="primary"
        //                         className={classes.button}
        //                         onClick={this.onClickButtonMenuView}
        //                 > Upload Data</Button>
        //             </div>
        //             <div>
        //                 {this.state.activeView}
        //             </div>
        //         </div>
        //     );
        //
        // }

        return(
            <div className="App">
        {this.state.activeView === 'l' &&  (
                <div>
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
                </div>
            )}
        {this.state.activeView === 'v' && (
                <div>
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
                        <FileLoader onSubmit={this.onSubmitFileLoader}/>
                    </div>
                </div>

            )}
        {this.state.activeView === '' && (

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

                        {this.state.activeView}
            </div>
            )}

</div>
        )
    }

}

export default withStyles(styles)(App);
