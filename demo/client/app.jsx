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
        <TextField hintText="Hint Text" />
      </div>
    );
  }
});

// DatePicker gives another error referring to TextField, so debugging TextField first.
// <DatePicker hintText="Landscape Dialog" mode="landscape"/>

if (Meteor.isClient) {
    Meteor.startup(function () {
        $(document.body).html("<div id='container'></div>");
        React.render(<App />, document.getElementById("container"));
    });
}
