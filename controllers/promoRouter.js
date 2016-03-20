

module.exports = function (express, bodyParser, callback) {
    
    var CURRENT_ROUTE = '/promotions';
    var MODEL_NAME = 'promotion';
    
    try {
        if (typeof express !== 'function' || typeof bodyParser !== 'function') {
            throw new Error("PROMOTIONS: You are setting up non application");
        } else {
            callback(null, {
                router: {},
                route: CURRENT_ROUTE,
                init: function () {
                    var router = express.Router();
                    router.use(bodyParser.json());
                    router.route('/')
                            .all(function (req, res, next) {
                                res.writeHead(200, {'Content-Type': 'text/plain'});
                                next();
                            })

                            .get(function (req, res, next) {
                                res.end('Will send all the ' + MODEL_NAME + 's to you!');
                            })

                            .post(function (req, res, next) {
                                res.end('Will add the ' + MODEL_NAME + ': ' + req.body.name + ' with details: ' + req.body.description);
                            })

                            .delete(function (req, res, next) {
                                res.end('Deleting all ' + MODEL_NAME + 's');
                            });
                    router.route('/:id')
                            .all(function (req, res, next) {
                                res.writeHead(200, {'Content-Type': 'text/plain'});
                                next();
                            })

                            .get(function (req, res, next) {
                                res.end('Will send details of the ' + MODEL_NAME + ': ' + req.params.id + ' to you!');
                            })

                            .put(function (req, res, next) {
                                res.write('Updating the ' + MODEL_NAME + ': ' + req.params.id + '\n');
                                res.end('Will update the ' + MODEL_NAME + ': ' + req.body.name +
                                        ' with details: ' + req.body.description);
                            })

                            .delete(function (req, res, next) {
                                res.end('Deleting ' + MODEL_NAME + ': ' + req.params.id);
                            });

                    this.router = router;
                    return this;
                },
                instance: function () {
                    return this.router;
                }
            });
        }
    } catch (error) {
        callback(error, null);
    }
};
