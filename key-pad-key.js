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

    _computeClassKeypadKey: function() {
        return 'key-pad-key__keyNum key-pad-key__' + this.label;
    },

    _onTapKey: function(evt) {
        this.fire('key-pad-key:key', this.key);
        console.log('key-pad-key:key', this.key);
    }
});