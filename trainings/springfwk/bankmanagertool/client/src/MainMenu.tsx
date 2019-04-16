import * as React from 'react';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class MainMenu extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

    }

    public render() {
        const { classes } = this.props;

        return (
            <div>
                        <Button variant="contained" color="primary" className={classes.button}> Load Data</Button>
                        <Button variant="contained" color="primary" className={classes.button}> View Data</Button>
            </div>
        );
    }
}

export default withStyles(styles)(MainMenu);
