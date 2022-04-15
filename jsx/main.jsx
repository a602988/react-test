import Title from './title.jsx'


class ShoopingList extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
    }
    render(){
        return(

            <div className="shopping-list">

                <h1>shopping list for {this.props.name}</h1>
                <Title />

                <ul>
                    <li>Instragram</li>
                    <li>whatsApp</li>
                    <li>Oculas</li>
                    <li>{this.props.phone}</li>
                </ul>
            </div>
        );
    }
}

let myname = "jean";
let myphone = "0988700588";

ReactDOM.render(
    <ShoopingList name={myname} phone={myphone} />,
    document.getElementById('root')
);