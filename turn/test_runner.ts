/// <reference path="__init__.ts"/>
module turn {

    /* An aggregate reporter for test cases */
    export class TestRunner {

        /* Tests */
        tests:turn.Testable[] = [];

        /* Results */
        results:turn.TestResult[] = [];

        /* Aggregate results */
        total:number = 0;
        failed:number = 0;

        /* Logger */
        log:turn.TestLogger = null;

        constructor(log:turn.TestLogger) {
            this.log = log;
        }

        /* Run all tests */
        execute():void {
            for (var i = 0; i < this.tests.length; ++i) {
                var test = this.tests[i];
                var result:turn.TestResult = null;
                try {
                    result = test.execute(this.log);
                }
                catch (e) {
                    result = <turn.TestResult> {
                        tests: 1,
                        failed: 1,
                        label: e.toString()
                    };
                }
                this.total += result.tests;
                this.failed += result.failed;
                this.results.push(result);
            }
        }

        /* Register a testable */
        register(t:turn.Testable) {
            this.tests.push(t);
        }

        /* Print a summary */
        report():void {
            for (var i = 0; i < this.results.length; ++i) {
                var r = this.results[i];
                this.log.info(': ' + r.label + ' ' + (r.tests - r.failed) + '/' + r.tests + ' passed');
            }
            this.log.info(':: ' + (this.total - this.failed) + '/' + this.total + ' passed');
            if (this.failed > 0) {
                this.log.info(':: FAILED');
            }
            else {
                this.log.info(':: PASSED');
            }
        }
    }
}
