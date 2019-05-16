import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';

class Account extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);


    }

    private handleChange = name => event => {
        console.log(name + ":" + event.target.value);
    };


    public render() {
        const account = this.props.account;
        console.log(account);
        console.log(account.accountNumber);
        return (
            <div>
                <div>
                    <form autoComplete="off">
                        <Grid container={true} direction={"column"} justify={"flex-start"} alignItems={"center"}>
                            <TextField margin="normal" label={"Account Number"} value={account.accountNumber || ''}
                                       onChange={this.handleChange('Account Number')}/>
                            <TextField margin="normal" label={"Creation Date"} value={account.creationDate || ''}
                                       onChange={this.handleChange('Creation Date')}/>
                            <TextField margin="normal" label={"Initial Balance"} value={account.initialBalance || ''}
                                       onChange={this.handleChange('Initial Balance')}/>
                            <TextField margin="normal" label={"Current Balance"} value={account.currentBalance || ''}
                                       onChange={this.handleChange('Current Balance')}/>
                            <TextField margin="normal" label={"Start Period"} value={account.startPeriod || ''}
                                       onChange={this.handleChange('Start Period')}/>
                            <TextField margin="normal" label={"End Period"} value={account.endPeriod || ''}
                                       onChange={this.handleChange('End Period')}/>
                        </Grid>
                    </form>
                </div>
            </div>

        );
    }

    // }
}

export default Account;
