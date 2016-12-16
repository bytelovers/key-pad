'use strict';

Polymer({

    is: 'key-pad',

    properties: {
        /**
         * Number introduced
         * @type {String}
         */
        model: {
            type: String,
            readOnly: true,
            value: ''
        },

        maxLength: {
            type: Number,
            value: 4
        },

        shuffle: {
            type: Boolean
        },

        _keyLength: {
            type: Number,
            value: 0
        },

        _keypadNums: {
            type: Array
        }

    },

    ready: function() {

    },

    attached: function() {
        var shuffle = this.shuffle ? true : false;

        this.set('_keypadNums', this._getRandomNumbers(shuffle));
    },

    reset: function() {
        this._setModel('');
        this.set('_keyLength', 0);
    },

    _getInputLength: function() {
        return new Array(this.maxLength);
    },

    _fillPoints: function() {
        //TODO
        //Add class to points to fill

    },

    ////// EVENTS

    _onTapKey: function(evt) {
        if (this.model.length < this.maxLength) {
            this._setModel(this.model + evt.model.keyNum);
            this.fire('key-pad.num-clicked', evt.model.keyNum);
            console.log(evt.model.keyNum);
        }
    },

    _onTapOk: function() {
        this.fire('key-pad.ok-clicked');
    },

    _onTapReset: function() {
        this.fire('key-pad.reset-clicked');
    },

    /**
     * Generate a random array
     * @param  {Integer} inPutArray Number of elements in array
     * @return {Array}              A shuffled array
     */
    _uniqueRandomNumber: function(inPutArray) {
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
    },

    /**
     * Generate keypad numbers
     * @param  {Boolean} forceOrdering Determine if Numbers will be shuffled or not
     * @return {Array}                 Array of numbers
     */
    _getRandomNumbers: function(forceOrdering) {
        var arr    = forceOrdering ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] : this._uniqueRandomNumber(10);
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
