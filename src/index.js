const a = require('./a');
const b = require('./b');
const c = require('./c');

module.exports = class Hello {
    constructor () {
        this.settings = SETTINGS; // Defined by webpack.DefinePlugin
        this.a = new A();
        this.b = new B();
        this.c = new C();
    }
};
