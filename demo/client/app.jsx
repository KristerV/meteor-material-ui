var ThemeManager = new MUI.Styles.ThemeManager();

var {
  AppBar,
  DatePicker,
  TextField
} = MUI;

React.initializeTouchEvents(true)

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <DatePicker hintText="Landscape Dialog" mode="landscape"/>
        <TextField hintText="Hint Text" />
      </div>
    );
  }
});

if (Meteor.isClient) {
    Meteor.startup(function () {
        $(document.body).html("<div id='container'></div>");
        React.render(<App />, document.getElementById("container"));
    });
}
