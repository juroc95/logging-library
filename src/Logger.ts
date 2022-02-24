/**
 * This is the module documentation comment for the Logger
 * module. Logger class is built in this module and if the user
 * create a logger variable, the user can set the status of
 * the logger, and can output the desired message in various
 * types of log through the logger member functions.
 *
 * @module
 */

/**
 * This is the class documentation comment for the Logger
 * class. There are several status variables and several
 * logging functions in the Logger class. Several status
 * variables are boolean type which determine the configuration
 * status of Logger. There are 4 types of logging functions:
 * error, warn, info, and debug, and it receives a string type
 * variable as a parameter.
 */
export class Logger {
    /**
     * The errorStatus variable determines whether to output
     * the error log or not. Output if true , ignore if false.
     */
    errorStatus: boolean;
    /**
     * The warnStatus variable determines whether to output
     * the warn log or not. Output if true , ignore if false.
     */
    warnStatus: boolean;
    /**
     * The infoStatus variable determines whether to output
     * the info log or not. Output if true , ignore if false.
     */
    infoStatus: boolean;
    /**
     * The debugStatus variable determines whether to output
     * the debug log or not. Output if true , ignore if false.
     */
    debugStatus: boolean;
    /**
     * The costructor sets the values of all status variables
     * to true. In other words, when a logger variable is created,
     * the initial setting value of all status variables is true.
     */
    constructor() {
        this.errorStatus = true;
        this.warnStatus = true;
        this.infoStatus = true;
        this.debugStatus = true;
    }
    /**
     * The errorLog function takes msg (string type) as a parameter,
     * and if errorStatus is true, msg is output as an error log. if
     * errorStatus is false, nothing will be displayed.
     * @param msg
     */
    errorLog(msg: string): void {
        if (this.errorStatus)
            console.error(msg);
    }
    /**
     * The warnLog function takes msg (string type) as a parameter,
     * and if warnStatus is true, msg is output as a warn log. if
     * warnStatus is false, nothing will be displayed.
     * @param msg
     */
    warnLog(msg: string): void {
        if (this.warnStatus)
            console.warn(msg);
    }
    /**
     * The infoLog function takes msg (string type) as a parameter,
     * and if infoStatus is true, msg is output as an info log. if
     * infoStatus is false, nothing will be displayed.
     * @param msg
     */
    infoLog(msg: string): void {
        if (this.infoStatus)
            console.info(msg);
    }
    /**
     * The debugLog function takes msg (string type) as a parameter,
     * and if debugStatus is true, msg is output as a debug log. if
     * debugStatus is false, nothing will be displayed.
     * @param msg
     */
    debugLog(msg: string): void {
        if (this.debugStatus)
            console.debug(msg);
    }
    /**
     * The ignoreError function sets errorStatus to false . When this
     * function is triggered, the final result value will be false whether
     * the previous value is true or false. As a result, future error
     * logs will be ignored.
     */
    ignoreError(): void {
        this.errorStatus = false;
    }
    /**
     * The ignoreWarn function sets warnStatus to false . When this
     * function is triggered, the final result value will be false whether
     * the previous value is true or false. As a result, future warn
     * logs will be ignored.
     */
    ignoreWarn(): void {
        this.warnStatus = false;
    }
    /**
     * The ignoreInfo function sets infoStatus to false . When this
     * function is triggered, the final result value will be false whether
     * the previous value is true or false. As a result, future info
     * logs will be ignored.
     */
    ignoreInfo(): void {
        this.infoStatus = false;
    }
    /**
     * The ignoreDebug function sets debugStatus to false . When this
     * function is triggered, the final result value will be false whether
     * the previous value is true or false. As a result, future debug
     * logs will be ignored.
     */
    ignoreDebug(): void {
        this.debugStatus = false;
    }
    /**
     * The displayError function sets errorStatus to true . When this
     * function is triggered, the final result value will be true whether
     * the previous value is true or false. As a result, future error
     * logs will be displayed.
     */
    displayError(): void {
        this.errorStatus = true;
    }
    /**
     * The displayWarn function sets warnStatus to true . When this
     * function is triggered, the final result value will be true whether
     * the previous value is true or false. As a result, future warn
     * logs will be displayed.
     */
    displayWarn(): void {
        this.warnStatus = true;
    }
    /**
     * The displayInfo function sets infoStatus to true . When this
     * function is triggered, the final result value will be true whether
     * the previous value is true or false. As a result, future info
     * logs will be displayed.
     */
    displayInfo(): void {
        this.infoStatus = true;
    }
    /**
     * The displayDebug function sets debugStatus to true . When this
     * function is triggered, the final result value will be true whether
     * the previous value is true or false. As a result, future debug
     * logs will be displayed.
     */
    displayDebug(): void {
        this.debugStatus = true;
    }
}