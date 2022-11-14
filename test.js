(function (exports) {
    'use strict';

    class ClientSpecificWebworker {
        constructor() { }
        script1() {
            console.log('test');
        }
    }

    exports.ClientSpecificWebworker = ClientSpecificWebworker;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});

