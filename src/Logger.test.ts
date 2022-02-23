import "jest-extended";
import { Logger } from "./Logger";

test("Test 1", () => {
    // Create an array to store the console output.
    const errorLogOutput: string[] = [];
    const warnLogOutput: string[] = [];
    const infoLogOutput: string[] = [];
    const debugLogOutput: string[] = [];

    /* Configure Jest to replace every console.info call in the
     * duration of this test with a function that pushes a message
     * onto the end of logOutput. To test console.error,
     * console.warn, or console.debug, just replace the "info"
     * string with the appropriate method name.
     */
    jest.spyOn(global.console, "error").mockImplementation((msg: string) => {
        errorLogOutput.push(msg);
    });
    jest.spyOn(global.console, "warn").mockImplementation((msg: string) => {
        warnLogOutput.push(msg);
    });
    jest.spyOn(global.console, "info").mockImplementation((msg: string) => {
        infoLogOutput.push(msg);
    });
    jest.spyOn(global.console, "debug").mockImplementation((msg: string) => {
        debugLogOutput.push(msg);
    });

    // Test scenario
    const log1 = new Logger();
    log1.infoLog("test1");
    log1.ignoreInfo();
    log1.infoLog("test2");
    log1.warnLog("test3");
    const log2 = new Logger();
    log2.infoLog("test4");
    log1.infoLog("test5");
    log1.displayInfo();
    log1.infoLog("test6");

    // Check that the log output is what we expected; use
    // .toStrictEqual instead of .toBe when comparing arrays.
    expect(errorLogOutput).toStrictEqual([ ]);
    expect(warnLogOutput).toStrictEqual([ "test3" ]);
    expect(infoLogOutput).toStrictEqual([ "test1", "test4", "test6" ]);
    expect(debugLogOutput).toStrictEqual([ ]);
});