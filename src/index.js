
var App = React.createClass({
  render: function() {
    return (
      <div>
      <h1>Hello, Welcome to {this.props.name}</h1>
      <MenuPart title="meals" items={this.props.meals} />
      <MenuPart title="drinks" items={this.props.drinks} />
      <MenuPart title="desserts" items={this.props.desserts} />
      </div>
    )
  }
})

var MenuPart = React.createClass({
  getInitialState(){
    return {/*initial state*/};
  },
  render: function() {
    console.log(this.props)
    return (
      <div><h2>We offer {this.props.title}</h2>
      <ul>
        {this.props.items.map(function(food){
          return (<li>{food}</li>)
        })}
      </ul>
      </div>
    )
  }
})
