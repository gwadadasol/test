import * as React from 'react';
import './App.css';

import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    root: {
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        width: '100%',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

const tableStyle = {
    maxWidth: 1400,
    minWidth: 700
};


class OperationList extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

    }


    public render() {
        const operations = this.props.operations;

        return (
            <div>
                {/*<div>Selected account: {this.props.accountNumber}</div>*/}
                <div>
                    <h2> Operation List</h2>
                </div>
                <div>
                    Period: {this.displayDate(this.props.startPeriod) } - {this.displayDate(this.props.endPeriod) }
                </div>

                <div>
                    Current Balance: {this.props.currentBalance}<br/>
                    Initial Balance:{this.props.initialBalance}
                </div>

                <div >

                    <Table style={tableStyle}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {   operations.map((operation: any) =>

                                <TableRow key={operation.id}>
                                    <TableCell component="th" scope="row">{this.displayDate(operation.date)}</TableCell>
                                    <TableCell align="right">{operation.description}</TableCell>
                                    <TableCell align="right">{operation.amount}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

        );
    }

    private displayDate(value){
        return (value!== undefined) ?
            new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }).format(new Date(value)) : "";
    }


}

export default OperationList;
