// My first component
var App = React.createClass({
  // Set the initial state so that it is not 'null', which causes :(
  getInitialState: function() {
    return {
      query: ''
    }
  },
  style: {
    searchContainer: {
      border: '1px solid #efefef',
      padding: '1rem',
      margin: '1rem'
    }
  },
  onNewSearchValue: function(e) { // Search input handler
    console.log('new food entered', e.target.value);
    this.setState({
      query: e.target.value
    })
  },
  onSearchButtonClick: function() { // Button click handler
    console.log('You searched for ', this.state.query);
  },
  isIndexMatch: function(item) { // Search function
    return item.indexOf(this.state.query) > -1;
  },
  render: function() {
    console.log(this.state); // null
    return (
      <div>
        <h1>Hello. Welcome to {this.props.name} </h1>
        <div style={this.style.searchContainer}>
          <input
            role="search"
            type="text"
            placeholder="Find a DinoFood!"
            onChange={this.onNewSearchValue.bind(this)} />
          <button
            onClick={this.onSearchButtonClick}>Search</button>
        </div>
        <MenuPart title="meals" inventory={
          this.props.items
            .filter(this.isIndexMatch)
          } />
        <MenuPart title="drinks" inventory={
          this.props.items
            .filter(this.isIndexMatch)
          } />
          <MenuPart title="desserts" inventory={
            this.props.items
              .filter(this.isIndexMatch)
            } />
      </div>
    )
  }
});
