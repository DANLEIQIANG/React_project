/*
id:public token
566254732409-n1ecacbt3f7533rg5rg8thi0nso4prlj.apps.googleusercontent.com
secret: private token
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
 */

if(process.env.NODE_ENV == 'production'){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');

}