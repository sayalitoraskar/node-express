
exports.log = (type,message) => {
    if(type === 'error')
        console.error('ERROR: '+message);
    console.log('INFO: '+message);
};