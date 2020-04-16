const PROXY_CONFIG = [

    {
    context:['/clans'],
//    target: 'https://api.clashroyale.com/v1/clans?name=warrior&limit=10',
    target: 'https://api.clashroyale.com/v1/',
    secure: true,
    loglevel: 'debug',
   // pathRewrite: {'/server':''},
    changeOrigin:true
    }

];
module.exports = PROXY_CONFIG;