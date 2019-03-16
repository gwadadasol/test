

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
        };
    }


    public componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/accounts')
            .then(response => response.json())
            .then(value => this.setState({accounts: value, isLoading: false}));
    }

    public handleChange = event => {
        this.props.onSelect(event.target.key, event.target.value);
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
                                inputProps={{id: 'account-selected',name: 'account'}}
                            >
                                {accounts.map((account: any) =>
                                    <MenuItem key={account.id} value={account}>{account.accountNumber}</MenuItem>
                                )}

                            </Select>
                        </FormControl>
                    </form>
                </div>
            </div>

        );
    }
}