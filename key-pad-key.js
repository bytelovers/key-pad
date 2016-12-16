'use strict';

Polymer({
    is: 'key-pad-key',
    properties: {
        key: {
            type: String
        },
        label: {
            type: String
        }
    },

    attached: function() {
        if (!this.label) {
            this.set('label', this.key);
        }

        this.updateStyles();
    },

    _onTapKey: function(evt) {
        this.fire('key-pad-key:key', this.key);
        console.log('key-pad-key:key', this.key);
    }
});