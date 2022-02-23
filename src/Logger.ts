/**
 * This is the module documentation comment for the Logger
 * module. You should replace this text with your own
 * documentation. Do not remove the "@module" directive at the
 * bottom of this comment, however: it tells TypeDoc that this
 * is a documentation comment for this whole module, not just
 * for some individual definition in the module.
 *
 * @module
 */

/**
 * This is the class documentation comment for the Logger
 * class. There are several status variables and several
 * logging functions in the Logger class. Several status
 * variables are boolean type and determine the configuration
 * status of Logger. If status is false , no log is displayed.
 */
export class Logger {
    errorStatus: boolean;
    warnStatus: boolean;
    infoStatus: boolean;
    debugStatus: boolean;
    constructor() {
        this.errorStatus = true;
        this.warnStatus = true;
        this.infoStatus = true;
        this.debugStatus = true;
    }
    errorLog(msg: string): void {
        if (this.errorStatus)
            console.error(msg);
    }
    warnLog(msg: string): void {
        if (this.warnStatus)
            console.warn(msg);
    }
    infoLog(msg: string): void {
        if (this.infoStatus)
            console.info(msg);
    }
    debugLog(msg: string): void {
        if (this.debugStatus)
            console.debug(msg);
    }
    ignoreError(): void {
        this.errorStatus = false;
    }
    ignoreWarn(): void {
        this.warnStatus = false;
    }
    ignoreInfo(): void {
        this.infoStatus = false;
    }
    ignoreDebug(): void {
        this.debugStatus = false;
    }
    displayError(): void {
        this.errorStatus = true;
    }
    displayWarn(): void {
        this.warnStatus = true;
    }
    displayInfo(): void {
        this.infoStatus = true;
    }
    displayDebug(): void {
        this.debugStatus = true;
    }
}