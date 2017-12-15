var 
    mongoose = require('mongoose'),
    _ = require('underscore'),
    Response = require('../helpers/response'),
    Contact = mongoose.model('Contact');

var routesApiMessage = [{
    path: '/api/contacts',
    httpMethod: 'POST',
    middleware: [function(req, res) {
        var contact = new Contact(req.body);
        contact.save(function(err, response) {
            if (err) {
                return Response.build(res, 500, err);
            } else {
                return Response.build(res, 201, response);
            }
        });
    }]
},
{
    path: '/api/contacts',
    httpMethod: 'GET',
    middleware: [function(req, res) {
        return Contact.find({},function(err, contacts) {
            if (!err) {
                return Response.build(res, 200, contacts);
            } else {
                return Response.build(res, 500, err);
            }
        });
    }]
}, {
    path: '/api/contacts/:id',
    httpMethod: 'PUT',
    middleware: [function(req, res) {
        return Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function(err, contact) {
            if (err) {
                return Response.build(res, 500, err);
            } else if (!contact) {
                return Response.build(res, 404, 'contact Not found');
            } else {
                return Response.build(res, 200, contact);
            }
        })
    }]
},
{
    path: '/api/contacts/:id',
    httpMethod: 'DELETE',
    middleware: [function(req, res) {
        return Contact.findByIdAndRemove(req.params.id, function(err, contact) {
            if (err) {
                return Response.build(res, 500, err);
            } else if (!contact) {
                return Response.build(res, 404, 'contact Not found');
            } else {
                return Response.build(res, 200,contact);
            }
        });
    }]
}]

module.exports = function(app) {
    _.each(routesApiMessage, function(route) {
        var args = _.flatten([route.path, route.middleware]);
        switch (route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });

}