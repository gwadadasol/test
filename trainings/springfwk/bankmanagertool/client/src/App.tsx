import * as React from 'react';
import './App.css';

import AccountListSelect from "./AccountListSelect";

import OperationList from "./OperationList";

import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts/lib/index';

const data = [
    {name: 'Mon', Visits: 2200, Orders: 3400},
    {name: 'Tue', Visits: 1280, Orders: 2398},
    {name: 'Wed', Visits: 5000, Orders: 4300},
    {name: 'Thu', Visits: 4780, Orders: 2908},
    {name: 'Fri', Visits: 5890, Orders: 4800},
    {name: 'Sat', Visits: 4390, Orders: 3800},
    {name: 'Sun', Visits: 4490, Orders: 4300},
];

class App extends React.Component<{}, any> {
    public constructor(props: any){
        super(props);

        this.state = {
            activeAccount: 0
        };

        console.log ( "constructor");
        console.log("App->constructor->Id: " + this.state.activeAccount);

        this.handleSelectAccount = this.handleSelectAccount.bind(this);
    }

    public handleSelectAccount(id) {
        this.setState({
            activeAccount:id
        });
        console.log("App->handleSelectAccount->Id: " + this.state.activeAccount);
        console.log("App->handleSelectAccount->Id: " + id);
    };


    public render() {
        return (
            <div className="App">
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
                {/*<div>*/}
                    {/*<header className="App-header">*/}
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        {/*<h1 className="App-title">Welcome to React</h1>*/}
                    {/*</header>*/}
                    {/*<BeerList/>*/}
                {/*</div>*/}
                <div>
                    <AccountListSelect onSelect={this.handleSelectAccount} />
                    <OperationList account={this.state.activeAccount}/>
                </div>
            </div>
        );
    }
}

export default App;
