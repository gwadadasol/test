import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Account extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);



        this.state =
            {
                accountForm:
                    {
                        id:this.props.account.id,
                        accountNumber:this.props.account.accountNumber,
                        creationDate:this.props.account.creationDate,
                        initialBalance:this.props.account.initialBalance,
                        currentBalance:this.props.account.currentBalance,
                        startPeriod:this.props.account.startPeriod,
                        endPeriod:this.props.account.endPeriod
                    },
                editable:false

            };

        // console.log("Account::constructor props" + this.props.account);

    }

    private handleChange = event => {
        console.log(event.target.name + ":" + event.target.value);

        const accountForm = {...this.state.accountForm};
        accountForm[event.target.name] = event.target.value;
        this.setState({
            accountForm
        });

    };

    private onSave = event => {
        console.log("Save");
        this.setState({editable:false});
        this.props.onUpdateAccount(this.state.accountForm);
    }

    private onEdit = event => {
        console.log("Edit");

        this.setState({editable:true});
    }


    public componentDidMount(){
        console.log("componentDidMount");
        console.log(this.props.account);
    }

    public componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    private setAccount = propsAccount => {
        console.log("setAccount");

        // When no account has been selected yet
        if (this.state === undefined){
            // console.log("state === undefined");
            this.setState({accountForm:propsAccount});
        }
        // When the selected account is different fromt the current displayed account
        else if (this.state.accountForm.accountNumber !== this.props.account.accountNumber){
            console.log("state.accountNumber <> props.accountNumer");
            this.setState({accountForm:propsAccount});
        }

    }




    public render() {
        console.log("Account::render()");

        this.setAccount(this.props.account);

        const account = this.state.accountForm;
        // let account = this.props.account;
        // console.log(account);
        // console.log("props:" +  this.props.account.accountNumber);
        // console.log("state:" +  this.state.accountForm.accountNumber);

        // if (this.state === undefined){
        //     console.log("state === undefined");
        //     account = this.props.account;
        // }else if (this.state.accountForm.accountNumber !== this.props.account.accountNumber){
        //     console.log("state.accountNumber <> props.accountNumer");
        //     this.setAccount(this.props.account);
        //     account = this.state.accountForm;
        // }else{
        //     console.log("ELSE");
        //     account = this.state.accountForm;
        // }

        console.log("Account -> " + this.props.account.id);

        return (
            <div>

                { account!== undefined && this.state.editable === true && (
                <div>
                    <form autoComplete="off">
                        <Grid container={true} direction={"column"} justify={"flex-start"} alignItems={"center"}>
                            <TextField margin="normal" label={"Account Number"} name={"accountNumber"} value={account.accountNumber || ''}
                                       onChange={this.handleChange}/>
                            <TextField margin="normal" label={"Creation Date"} name={"creationDate"} value={account.creationDate || ''}
                                       onChange={this.handleChange}/>
                            <TextField margin="normal" label={"Initial Balance"} name={"initialBalance"} value={account.initialBalance || ''}
                                       onChange={this.handleChange}/>
                            <TextField margin="normal" label={"Current Balance"} name={"currentBalance"} value={account.currentBalance || ''}
                                       onChange={this.handleChange} InputProps={{readOnly: true }}/>
                            <TextField margin="normal" label={"Start Period"} name={"startPeriod"} value={account.startPeriod || ''}
                                       onChange={this.handleChange} InputProps={{readOnly: true }}/>
                            <TextField margin="normal" label={"End Period"} name={"endPeriod"} value={account.endPeriod || ''}
                                       onChange={this.handleChange} InputProps={{readOnly: true }}/>
                        </Grid>
                    <Grid container={true} spacing={16} direction={"row"} justify={"flex-start"} alignItems={"center"}>
                        <Button
                            variant="contained"
                            color="primary"
                            // className={classes.button}
                            onClick={this.onSave}
                            disabled={false}
                        > Save</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            // className={classes.button}
                            onClick={this.onEdit}
                            disabled={true}
                        > Edit</Button>
                    </Grid>
                    </form>
                </div>
                )
                }

                { account!== undefined && this.state.editable === false && (
                    <div>
                        <form autoComplete="off">
                            <Grid container={true} direction={"column"} justify={"flex-start"} alignItems={"center"}>
                                <TextField margin="normal" label={"Account Number"} name={"accountNumber"} value={account.accountNumber || ''}
                                           onChange={this.handleChange} InputProps={{readOnly: true }}/>
                                <TextField margin="normal" label={"Creation Date"} name={"creationDate"} value={account.creationDate || ''}
                                           onChange={this.handleChange} InputProps={{readOnly: true }}/>
                                <TextField margin="normal" label={"Initial Balance"} name={"initialBalance"} value={account.initialBalance || ''}
                                           onChange={this.handleChange} InputProps={{readOnly: true }}/>
                                <TextField margin="normal" label={"Current Balance"} name={"currentBalance"} value={account.currentBalance || ''}
                                           onChange={this.handleChange} InputProps={{readOnly: true }}/>
                                <TextField margin="normal" label={"Start Period"} name={"startPeriod"} value={account.startPeriod || ''}
                                           onChange={this.handleChange} InputProps={{readOnly: true }}/>
                                <TextField margin="normal" label={"End Period"} name={"endPeriod"} value={account.endPeriod || ''}
                                           onChange={this.handleChange} InputProps={{readOnly: true }}/>
                            </Grid>
                            <Grid container={true} spacing={8} direction={"row"} justify={"flex-start"} alignItems={"center"}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    // className={classes.button}
                                    onClick={this.onSave}
                                    disabled={true}
                                > Save</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    // className={classes.button}
                                    onClick={this.onEdit}
                                    disabled={false}
                                > Edit</Button>
                            </Grid>
                        </form>
                    </div>
                )
                }

            </div>

        );
    }

    // }
}

export default Account;
