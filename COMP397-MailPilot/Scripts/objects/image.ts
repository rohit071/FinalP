/// <reference path="../constants.ts" />

module objects {
    // IMAGE CLASS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Image extends objects.GameObject {
        constructor(x: number, y: number, buttonIDString: string) {
            super(buttonIDString);
            this.x = x;
            this.y = y;
        }
    }
}   