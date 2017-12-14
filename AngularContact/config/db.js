var _ = require('underscore');
module.exports = function(){

    var
        host="localhost",
        port=27017,
        database="TPZ",
        login=null, // null if none
        password=null, // null if none
        authdb = null, // null if none
        replicaSet = {
            name : "rs1",
            nodes : [{
                host : 'localhost',
                port : 27017
            }],
            enabled : false
        },
        poolSize = 5,
        keepAlive = 1,
        connectTimeoutMS = 30000,
        strategy = 'ping',
        readPreference = 'primaryPreferred', //primary, primaryPreferred,secondary,secondaryPreferred,nearest
        fsync = false,
        j = true,
        w = 'majority',
        wtimeout = 30000;

    var url = 'mongodb://'+host+':'+port;
    if(login && password){
        url = 'mongodb://'+login+':'+password+'@'+host+':'+port;
    }
    if(replicaSet.enabled){
        _.each(replicaSet.nodes,function(node){
            url += ',' + node.host + ':' + node.port;
        })
        url += '/' + database + '?replicaSet=' + replicaSet.name
    } else {
        url += '/'+database;
    }

    return {
        url : url,
        options :  {
            user: login,
            pass: password,
            auth: {
                authdb: authdb
            },
            server: {
                poolSize: poolSize,
                socketOptions: {
                    keepAlive: keepAlive,
                    connectTimeoutMS: connectTimeoutMS
                }
            },
            replset: {
                strategy: strategy,
                readPreference : readPreference
            },
            db : {
                fsync:fsync,
                j:j,
                w:w,
                wtimeout:wtimeout
            }
        }
    }
}
