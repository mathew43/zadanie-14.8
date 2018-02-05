Search = React.createClass({
  render: function(){
    var styles = {
      fontsize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };

    return <input
            type="text"
            onChange={this.handleChange}
            placeholder="Tutaj wpisz wyszukiwaną frazę"
            style={styles}
            value={this.state.searchTerm}
            />
  }
});

getInitialState(){
  return{
    searchingText: ''
  };
},

handleChange: function(event){
  var searchingText = event.target.value;
  this.setState({
    searchingText: searchingText
  });

  if (searchingText.length > 2){
    this.props.onSearch(searchingText);
  }
},
