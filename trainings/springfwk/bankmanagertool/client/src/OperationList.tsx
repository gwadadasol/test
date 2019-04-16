import * as React from 'react';
import './App.css';

import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

import 'typeface-roboto';

import Typography from '@material-ui/core/Typography';

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

const dotted = {
    'border-style': 'dotted',
};


class OperationList extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

    }


    public render() {
        const operations = this.props.operations;

        return (

            <div>

                <Typography variant="h4">Operation List</Typography>
                <Typography variant="h5"
                            align={"center"}> Period: {this.displayDate(this.props.startPeriod)} - {this.displayDate(this.props.endPeriod)} </Typography>

                <Typography variant="h5">
                    Current Balance: {this.props.currentBalance}<br/>
                    Initial Balance:{this.props.initialBalance}
                </Typography>

                <div>

                    <Table style={tableStyle}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><Typography variant="h6">Date</Typography></TableCell>
                                <TableCell align="center"><Typography variant="h6">Description</Typography></TableCell>
                                <TableCell align="center"><Typography variant="h6">Amount</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {operations.map((operation: any) =>

                                <TableRow key={operation.id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="body1">{this.displayDate(operation.date)}</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="body1">{operation.description}</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="body1">{operation.amount}</Typography>
                                    </TableCell>
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
