import React from "react"
import ReactDom from "react-dom"
import RaisedButton from 'material-ui/lib/raised-button';


import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';


import axios from 'axios';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  
  gridList: {
    width: "100%",
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};


class MyList extends React.Component {
    
    constructor(){
        super();
        this.state = {users:[]};
        this.callAPI();
    }

    callAPI() {
        axios.get("https://api.github.com/orgs/" + this.props.company + "/members")
        .then( (response) =>  this.setState({users: response.data}) );
    }
    render(){
        var userLists = this.state.users.map( (element,key) => <GridTile key={key}>{element.login} <img src={element.avatar_url} /> </GridTile>);
        
        return <div>
                    <RaisedButton label={"get users from " + this.props.company} onClick={this.callAPI.bind(this)}/>
                    <RaisedButton label={"debug state"} onClick={function() { console.log(this.state); }.bind(this)}/>
                    <div style={styles.root}>
                    <GridList cellHeight={200} style={styles.gridList} cols={8}>
                        {userLists}
                    </GridList>
                    </div>
                </div>
    }    
}

class Main extends React.Component {
    render() {
        return <div> Hello world! <br /> <MyList company="inovia-team" /> </div>;
    }
}

ReactDom.render(<Main />, document.getElementById("main"));
