(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        spinnerOnly: function () {
            if (!this.checkSimulator()) {
                window.plugins.spinnerDialog.show();
            }
        },

        withCallback: function () {
            if (!this.checkSimulator()) {
                window.plugins.spinnerDialog.show(
                    null,
                    null,
                    function(msg) {alert("Callback msg: " + msg)}
                );
            }
        },

        withMessage: function () {
            if (!this.checkSimulator()) {
                window.plugins.spinnerDialog.show(
                  null,
                  "Loading some awesome stuff",
                  null
                );
            }
        },

        withTitle: function () {
            if (!this.checkSimulator()) {
                window.plugins.spinnerDialog.show(
                  "I'm the spinner title",
                  null,
                  null
                );
            }
        },

        withMessageAndTitle: function () {
            if (!this.checkSimulator()) {
                window.plugins.spinnerDialog.show(
                  "Spinning like crazy",
                  "Loading some awesome stuff",
                  null
                );
            }
        },

        fixedSpinner: function () {
            if (!this.checkSimulator()) {
                window.plugins.spinnerDialog.show(
                  "I'm a fixed spinner",
                  "I will spin for 5 seconds",
                  true
                );
                setTimeout(function() {
                    window.plugins.spinnerDialog.hide();
                }, 5000);
            }
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.plugins.spinnerDialog === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);