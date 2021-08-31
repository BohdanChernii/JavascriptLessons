const createLogger = () => {
let message;
function warn (message) {
message = {
    message:'User try to restricted page',
    dateTime:new Date(),
    type:'warn',
}
}

function error (message) {
    message = {
        message:'Uexpected error on the site',
        dateTime:new Date(),
        type:'error',
    }
}

function log (message) {
    message = {
        message:'User try to restricted page',
        dateTime:new Date(),
        type:'warn',
    }
}

return {
    log,
    warn,
    error,
}
};
console.log(createLogger());



