/// <reference path="__init__.ts"/>
class AddTests extends turn.TestCase {

    constructor() {
        super('AddTests');
    }

    test_works():void {
        this.assert.isTrue(blah.worksAdd(3, 5) == 8);
    }

    test_fails():void {
        this.assert.isFalse(blah.failsAdd(3, 5) == 8);
    }
}
runner.register(new AddTests());
