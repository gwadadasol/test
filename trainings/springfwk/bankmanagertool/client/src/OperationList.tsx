import * as React from 'react';
import './App.css';

import { FormControl, InputLabel,  MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {log} from 'console';


const data = [
    {id:1, date: '21/01/2019', title: 'Retrait', amount: -340},
    {id:2, date: '22/01/2019', title: 'Loyer', amount: -2500},
    {id:3, date: '23/01/2019', title: 'Ecole', amount: -4300},
    {id:4, date: '24/01/2019', title: 'Taste', amount: -300},
    {id:5, date: '25/01/2019', title: 'AEON', amount: -200},
    {id:6, date: '26/01/2019', title: 'Chaussures', amount: -500},
    {id:7, date: '27/01/2019', title: 'Salaire', amount: 5000},
];


class OperationList extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

        this.state = {
            accounts: [],
            isLoading: true,
            operations: []

        }
    }


    public componentDidMount() {
        this.setState({isLoading: true});

        this.setState({operations: data, isLoading: false});


        fetch('http://localhost:8080/accounts')
             .then(response => response.json())
             .then(value => this.setState({accounts:value, isLoading:false}));
    }

    public handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name);
        console.log(this.state.accounts[event.target.value-1]);
    };

    public render() {
        const {accounts, isLoading, operations} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div>Selected account: {this.props.account}</div>
                <div>
                    <h2> Operation List</h2>
                </div>
                <div>
                    Period: [Debut] - [Fin]
                </div>
                <div>
                    Current Balance: 200000 <br/>
                    Initial Balance:250000
                </div>

                <div>

                    <Table className={"Operation List"}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {operations.map((operation: any) =>

                                    <TableRow key={operation.id}>
                                        <TableCell component="th" scope="row">
                                            {operation.date}
                                        </TableCell>
                                        <TableCell align="right">{operation.title}</TableCell>
                                        <TableCell align="right">{operation.amount}</TableCell>
                                    </TableRow>

                                // <div key={operation.id}>
                                //     {operation.title}<br/>
                                // </div>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

        );
    }
}

export default OperationList;
