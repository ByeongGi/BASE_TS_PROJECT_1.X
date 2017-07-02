

interface LoggerInitConfig {
    logTag: string
    option?: {
        level: string,
        message: string
    }
}


function Logger(config: LoggerInitConfig) {
    
    return () => {

    };
}


export default Logger; 