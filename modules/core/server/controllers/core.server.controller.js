'use strict';
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();




/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {
  res.render('modules/core/server/views/index', {
    user: req.user || null
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};

exports.sendMail = function(req, res) {
 
  var data = req.body;
 
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [
      {
        to: [
          {
            email: 'gin.nader94@gmail.com'
          }
        ],
        subject: 'You received a message from ' + data.contactName
      }
    ],
    from: {
      email: data.contactEmail
    },
    content: [
      {
        type: 'text/plain',
        value: data.contactMsg
      }
    ]
  }
});

//With callback 
sg.API(request, function(error, response) {
  if (error) {
    console.log('Error response received');
  }
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});

  

  res.json(data);
};
