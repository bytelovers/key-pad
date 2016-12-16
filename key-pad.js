'use strict';

Polymer({

    is: 'key-pad',

    properties: {
        /**
         * Number introduced
         * @type {String}
         */
        model: {
            type: String
        },

        keyLength: {
            type: Number,
            value: 0
        },

        _keypadNums: {
            type: Array
        }

    },

    attached: function() {
        this.set('_keypadNums', this._getRandomNumbers());
    },

    reset: function() {

    },

    _fillPoints: function() {
        //TODO
        //Add class to points to fill

    },

    _shake: function() {
        //TODO
        //Add class shake to the points
    },

    _onTapOk: function() {

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

        for (var i = 0, len = arr.length; i < len; i++) {
            if (i % 3 === 0) {
                row = [];
                arrTmp.push(row);
            }
            row.push(arr[i]);
        }
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        // return arrTmp;
    }

});
