import * as React from 'react';
import './App.css';

import AccountListSelect from "./AccountListSelect";

import OperationList from "./OperationList";

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

class App extends React.Component<{}, any> {
    public constructor(props: any) {
        super(props);

        this.state = {
            activeAccountId: 0,
            operations: [],
            selectectAccount: []
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

    public render() {
        const initialBalance = this.state.initialBalance;
        const currentBalance = this.state.currentBalance;
        const operations = this.state.operations;
        const accountNumber = this.state.selectectAccount.accountNumber;
        const startPeriod = this.state.selectectAccount.startPeriod;
        const endPeriod = this.state.selectectAccount.endPeriod;

        return (
            <div className="App">
                <div>
                    <AccountListSelect onSelect={this.handleSelectAccount}/>
                    <OperationList currentBalance={currentBalance}
                                   initialBalance={initialBalance}
                                   operations={operations}
                                   accountNumber={accountNumber}
                                   startPeriod = {startPeriod}
                                   endPeriod = {endPeriod}
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
    }
}

export default App;
