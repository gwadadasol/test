

import * as React from "react";
import './App.css';

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import {resolveAny} from "dns";


//
// interface IAccountListSelectProp {
//     onSelect(event: any): void;
// }

// export default class AccountListSelect extends React.Component< IAccountListSelectProp , any > {
    export default class AccountListSelect extends React.Component< any , any > {

    public constructor(props: any) {
        super(props);

        this.state = {
            accounts: [],
            isLoading: true
            // selectedAccount: props.activeAccount
        };
    }


    public componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/accounts')
            .then(response => response.json())
            .then(value => this.setState({accounts: value, isLoading: false}));
    }

    public handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log("name: " + event.target.name + " => " + event.target.value);
        console.log(this.state.accounts[event.target.value - 1]);
        console.log("selected Account1: " + this.state.selected);
        // this.setState({selected: event.target.value});
        console.log("selected Account2: " + this.state.selected );

        this.props.onSelect(event.target.value);
    }


    public render() {
        const {accounts, isLoading, operations} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div>
                    <form  autoComplete="off">
                        <FormControl >
                            <InputLabel htmlFor="account-selected">Account</InputLabel>
                            <Select
                                native={false}
                                value={3}
                                onChange={this.handleChange}
                                // onChange={ e => this.props.onSelect(e)}

                                inputProps={{id: 'account-selected',name: 'account'}}
                            >
                                {accounts.map((account: any) =>
                                    <MenuItem key={account.id} value={account.id}>{account.accountNumber}</MenuItem>
                                )}

                            </Select>
                        </FormControl>
                    </form>
                </div>
            </div>

        );
    }
}