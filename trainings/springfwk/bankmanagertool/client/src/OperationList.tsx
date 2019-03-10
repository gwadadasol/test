import * as React from 'react';
import './App.css';


const data = [
    {date: 'Mon', title: 2200, amount: 3400},
    {date: 'Tue', title: 1280, amount: 2398},
    {date: 'Wed', title: 5000, amount: 4300},
    {date: 'Thu', title: 4780, amount: 2908},
    {date: 'Fri', title: 5890, amount: 4800},
    {date: 'Sat', title: 4390, amount: 3800},
    {date: 'Sun', title: 4490, amount: 4300},
];


class OperationList extends React.Component<{}, any> {
    public constructor(props: any){
        super(props);

        this.state = {
            operations: [],
            isLoading: true
        }
    }


    public componentDidMount() {
        this.setState({isLoading: true});

        this.setState(this.props.operations:data, this.props.isLoading:false);


        // fetch('http://localhost:8080/good-beers')
        //     .then(response => response.json())
        //     .then(data => this.setState({beers:data, isLoading:false}));
    }

    public render() {
        const { operations, isLoading}  = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h2> Operation List</h2>
        {beers.map((beer: any) =>
            <div key={beer.id}>
            {beer.name}<br/>
            <GiphyImage name={beer.name} />
        </div>
        )}
        </div>

    );
    }
}

export default BeerList;
