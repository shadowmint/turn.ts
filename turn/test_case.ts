/// <reference path="__init__.ts"/>
module turn {

    /* A test runner */
    export class TestCase implements turn.Testable {

        /* Label for this test */
        public label:string = '';

        /* Asserter */
        public assert:Assert = null;

        constructor(label:string) {
            this.label = label;
            this.assert = new turn.Assert();
            console.log(this);
        }

        public execute(log:turn.TestLogger):turn.TestResult {
            var total = 0;
            var failed = 0;
            for (var key in this) {
                if (key.substr(0, 4) == 'test') {
                    try {
                        ++total;
                        var runner = this[key];
                        eval('this.'+key+'(this.log);');
                    }
                    catch (e) {
                        ++failed;
                        log.error('Failed', e);
                    }
                }
            }
            return <turn.TestResult> {
                tests: total,
                failed: failed,
                label: this.label
            }
        }
    }
}
