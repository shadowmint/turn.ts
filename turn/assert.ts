/// <reference path="__init__.ts"/>
module turn {

    /* Assertion helper */
    export class Assert {

        true(a:boolean):void {
            if (!a) {
                throw new Error(a + ' !== true');
            }
        }

        false(a:boolean):void {
            if (a) {
                throw new Error(a + ' !== false');
            }
        }

        equals(a:any, b:any):void {
            if (a !== b) {
                throw new Error(a + ' !== ' + b);
            }
        }
    }
}
