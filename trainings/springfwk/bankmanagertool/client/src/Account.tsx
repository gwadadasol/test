import * as React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import OperationList from "./OperationList";
import TextField from "@material-ui/core/TextField";

class Account extends React.Component< any , any > {


    public render() {

        return (
            <div>
                <div>
                    <form  autoComplete="off">
                        <FormControl >
                            <TextField label={"Account Number"}/>
                            <TextField label={"Creation Date"}/>
                            <TextField label={"Initial Balance"}/>
                            <TextField label={"Current Balance"}/>
                            <TextField label={"Start Period"}/>
                            <TextField label={"End Period"}/>
                        </FormControl>
                    </form>
                </div>
            </div>

        );
    }
}

export default Account;
