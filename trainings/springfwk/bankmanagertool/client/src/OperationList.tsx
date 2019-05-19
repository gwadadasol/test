import * as React from 'react';
import './App.css';

import {Grid, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

import 'typeface-roboto';

import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";

import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    // container: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // },
    // dense: {
    //     marginTop: 16,
    // },
    // menu: {
    //     width: 200,
    // },
    // root: {
    //     marginTop: theme.spacing.unit * 3,
    //     overflowX: 'auto',
    //     width: '100%',
    // },
    // TextField: {
    //     marginLeft: theme.spacing.unit,
    //     marginRight: theme.spacing.unit,
    // },
    table: {
        fontFamily: theme.typography.fontFamily,
    },
    // flexContainer: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     boxSizing: 'border-box',
    // },
    tableRow: {
        cursor: 'pointer',
        '&:hover': {
            'background-color': "red",
            // backgroundColor: theme.palette.background.default,
        },
    },
    // TableRowHover: {
    //     '&:hover': {
    //         backgroundColor: theme.palette.grey[200],
    //     },
    // },
    //
    // tableCell: {
    //     flex: 1,
    // },
    // noClick: {
    //     cursor: 'initial',
    // },
    paper: {padding: 5, marginTop: 5, marginBottom: 5},
});

const style = {
    Paper: {padding: 5, marginTop: 5, marginBottom: 5},

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

        this.state = {
            operationSize: this.props.operations.length
        };

    }


    public render() {
        const operations = this.props.operations;
        // this.setState({operationSize: operations.length});

        const {classes, columns, ...tableProps} = this.props;

        console.log("# operations: " + operations.length);
        if (operations.length > 0) {
            return (

                <div>

                    <Paper>
                        <Grid container={true} direction="column" spacing={8}>
                            {/*<Grid container={true} direction="row" justify="flex-start" alignItems="flex-start">*/}
                            <Grid container={true} item={true} spacing={8} xs={6}>
                                <Grid item={true} xs={3}>
                                    <Paper className={classes.paper}>
                                        <Typography align={"left"} noWrap={true} variant="h6">Current
                                            Balance:</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={3}>
                                    <Paper className={classes.paper} color={"#00cc00"}>
                                        <Typography align={"left"} noWrap={true} variant="h6"
                                                    color={"primary"}>{this.displayNumber(this.props.currentBalance)}</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid container={true} className={"demo"} direction="row" justify="flex-start"
                                  alignItems="flex-start" spacing={8} item={true} xs={6}>
                                <Grid item={true} xs={3}>
                                    <Paper className={classes.paper}>
                                        <Typography align={"left"} variant="h6">Period: </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item={true} xs={3}>
                                    <Paper className={classes.paper}>
                                        <Typography align={"left"}
                                                    variant="h6">{this.displayDate(this.props.startPeriod)} - {this.displayDate(this.props.endPeriod)}</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>


                            <Grid item={true}>
                                <div style={{height: 500, 'overflowY': 'auto'}}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className={classes.tableCell} align="center"><Typography
                                                    variant="h6">Date</Typography></TableCell>
                                                <TableCell className={classes.tableCell} align="center"><Typography
                                                    variant="h6">Description</Typography></TableCell>
                                                <TableCell className={classes.tableCell} align="right"><Typography
                                                    variant="h6">Amount</Typography></TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>

                                            {operations.map((operation: any) =>

                                                <TableRow key={operation.id} className={classes.tableRow}>
                                                    <TableCell className={classes.tableCell} component="th" scope="row">
                                                        <Typography
                                                            variant="body1">{this.displayDate(operation.date)}</Typography>
                                                    </TableCell>
                                                    <TableCell className={classes.tableCell} align="right">
                                                        <Typography variant="body1">{operation.description}</Typography>
                                                    </TableCell>
                                                    <TableCell className={classes.tableCell} align="right">
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
                                    <Paper className={classes.paper}>
                                        <Typography variant="h5"> Initial Balance: </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item={true}>
                                    <Paper className={classes.paper}>
                                        <Typography variant="h5"> {this.props.initialBalance} </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>

                </div>
            );
        } else {
            return (
                <div/>
            );
        }
    }

    private displayDate(value) {
        return (value !== undefined) ?
            new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: 'short'
            }).format(new Date(value)) : "";
    }

    private displayNumber(value) {
        return (value !== undefined) ?
            new Intl.NumberFormat('en-GB', {maximumFractionDigits: 2}).format(value) : "0.00";
    }


}

export default withStyles(styles)(OperationList);
