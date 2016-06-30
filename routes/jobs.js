var express = require('express');
var router = express.Router();
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var cors = require('./cors');
var HttpError = require('./errors').HttpError;
var promiseit = require('../libs/promiseit'),
    mongoConnect = promiseit.mongoConnect,
    collectionAggregate = promiseit.collectionAggregate;
var db = require('../libs/db');

router.use(cors);

router.get('/:job_title', function(req, res, next) {
    var job_title = req.params.job_title;
    var collection = db.get().collection('workings');

    var page = req.query.page || 0;

    collectionAggregate(collection, [
        {
            $match: {
                job_title: job_title,
            }
        },
        {
            $group: {
                _id: "$company",
                week_work_times: {$push: "$week_work_time"},
                average_week_work_time: {$avg: "$week_work_time"},
                count: {$sum: 1},
            }
        },
        {
            $sort: {
                average_week_work_time: -1,
            }
        },
        {
            $limit: 10,
        },
        {
            $skip: page * 10,
        },
    ]).then(function(results) {
        res.send(results);
    }).catch(function(err) {
        next(new HttpError("Internal Server Error", 500));
    });
});

module.exports = router;
