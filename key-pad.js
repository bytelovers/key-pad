'use strict';

/**
 * Generate a random array
 * @param  {Integer} inPutArray Number of elements in array
 * @return {Array}              A shuffled array
 */
var _uniqueRandomNumber = function(inPutArray) {
    var sArray    = [];
    var storeList = [];
    var k         = 1;

    // Inserts Numbers in Array
    for (var i = 1; i <= inPutArray; i++) {
        sArray.push(i);
    }
    // Outputs numbers non-repeated
    while (k <= inPutArray) {
        // Search for value inside the Array in a random position
        var randomPos = Math.floor(Math.random() * sArray.length);
        // Selects value and removes it from Array
        var valueFromArray = sArray.splice(randomPos, 1);
        // Converts value in number
        var numberRand = parseInt(valueFromArray);
        //store and make array key for as like 0,1,2 for length :3
        storeList.push(numberRand - 1);
        k++;
    }
    return storeList;
};

var keys;

Polymer({

    is: 'key-pad',
    listeners: {
        'key-pad-key:key': '_onKeypadKey'
    },

    properties: {
        /**
         * Number introduced
         * @type {String}
         */
        model: {
            type: String,
            readOnly: true,
            value: '',
            observer: '_modelObserver'
        },

        /**
         * Max input length for keypad
         * @type {Boolean}
         */
        maxLength: {
            type: Number,
            value: 4
        },

        /**
         * Ordering keys
         * @type {Boolean}
         */
        shuffle: {
            type: Boolean
        },

        _keypadNums: {
            type: Array
        }

    },

    ready: function() {

    },

    attached: function() {
        var shuffle = !!this.shuffle ? false : true;
        this.set('_keypadNums', this._getRandomNumbers(shuffle));
    },

    reset: function() {
        this._setModel('');
    },

    _getInputLength: function() {
        return new Array(this.maxLength);
    },

    // Observer
    _modelObserver: function() {
        this._computeClassFillPoints();
    },

    // Compute clases
    _computeClassKeypadPoint: function(index) {
        var idx = index + 1;
        return 'key-pad__point key-pad__point--' + idx.toString();
    },

    _computeClassFillPoints: function() {
        var points = Polymer.dom(this.root).querySelectorAll('.key-pad__point');
        var selectedClass = 'key-pad__point--selected';
        var modelLen = this.model.length;

        points.map(function(point, index) {
            if (index < modelLen) {
                point.classList.add(selectedClass);
            } else {
                point.classList.remove(selectedClass);
            }
        });

        this.updateStyles();
    },

    ////// EVENTS
    _onKeypadKey: function(evt, detail) {
        //TODO: Check characters
        var keyValue = detail.toString();
        
        if (this.model.length < this.maxLength) {
            this._setModel(this.model + keyValue);
        }
    },

    _onTapReset: function() {
        this.reset();
        this.fire('key-pad:reset-clicked');
    },

    /**
     * Generate keypad numbers
     * @param  {Boolean} forceOrdering Determine if Numbers will be shuffled or not
     * @return {Array}                 Array of numbers
     */
    _getRandomNumbers: function(forceOrdering) {
        var arr    = forceOrdering ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] : _uniqueRandomNumber(10);
        var arrTmp = [];
        var row    = [];

        /*for (var i = 0, len = arr.length; i < len; i++) {
            if (i % 3 === 0) {
                row = [];
                arrTmp.push(row);
            }
            row.push(arr[i]);
        }
        */
        return arr;
        // return arrTmp;
    }

});
