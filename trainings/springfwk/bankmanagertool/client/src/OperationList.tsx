import * as React from 'react';
import './App.css';

import {Grid, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

import 'typeface-roboto';

import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

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
    table: {
        fontFamily: theme.typography.fontFamily,
    },
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },

});

const style = {
    Paper: {padding: 5, marginTop: 5, marginBottom: 5}
}

// const tableStyle = {
//     maxWidth: 1400,
//     minWidth: 700
// };

const dotted = {
    'border-style': 'dotted',
};


class OperationList extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

    }


    public render() {
        const operations = this.props.operations;

        const {classes, columns, ...tableProps} = this.props;

        console.log(operations.length);

        return (

            <div>
                {"test :" + operations.length}
                {/*<Paper component={"div"}>*/}
                <Grid container={true} direction="column" spacing={24}>
                    {/*<Grid container={true} direction="row" justify="flex-start" alignItems="flex-start">*/}
                    <Grid container={true} item={true}>
                        <Paper style={style.Paper}>
                            <Typography variant="h5">Current Balance: {this.props.currentBalance}</Typography>
                        </Paper>
                    </Grid>
                    <Grid container={true} className={"demo"} direction="row" justify="flex-start" alignItems="center" spacing={16} item={true}>
                        <Grid item={true}>
                            <Paper style={style.Paper}>
                                <Typography variant="h5">Period: </Typography>
                            </Paper>
                        </Grid>
                        <Grid item={true}>
                            <Paper style={style.Paper}>
                                <Typography variant="h5">From: </Typography>
                                <Typography variant="h5">{this.displayDate(this.props.startPeriod)}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item={true}>
                            <Paper style={style.Paper}>
                                <Typography variant="h5">To: </Typography>
                                <Typography variant="h5">{this.displayDate(this.props.endPeriod)}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>


                    <Grid item={true}>
                        <div style={{height: 500, 'overflow-y': 'auto'}}>
                            <Table component="div">
                                <TableHead component={"div"}>
                                    <TableRow>
                                        <TableCell align="center"><Typography variant="h6">Date</Typography></TableCell>
                                        <TableCell align="center"><Typography
                                            variant="h6">Description</Typography></TableCell>
                                        <TableCell align="right"><Typography
                                            variant="h6">Amount</Typography></TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {operations.map((operation: any) =>

                                        <TableRow key={operation.id}>
                                            <TableCell component="th" scope="row">
                                                <Typography
                                                    variant="body1">{this.displayDate(operation.date)}</Typography>
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
                    </Grid>
                    <Grid container={true} item={true} spacing={8}>
                        <Grid item={true}>
                        <Paper style={style.Paper}>
                            <Typography variant="h5"> Initial Balance: </Typography>
                        </Paper>
                        </Grid>
                        <Grid item={true}>
                            <Paper style={style.Paper}>
                                <Typography variant="h5"> {this.props.initialBalance} </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                {/*</Paper>*/}

            </div>
        );
    }

    private displayDate(value) {
        return (value !== undefined) ?
            new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }).format(new Date(value)) : "";
    }


}

export default OperationList;
