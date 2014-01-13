/// <reference path="__init__.ts"/>
module turn {

    /* Assertion helper */
    export class Assert {

        isTrue(a:boolean):void {
            if (!a) {
                throw new Error('Value not true');
            }
        }
    }
}
