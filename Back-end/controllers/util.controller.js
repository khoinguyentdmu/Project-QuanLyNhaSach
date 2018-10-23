exports.checkTheLoginStatus = function (req, res, next) {
    res.status(200).json({
        "message": "Verified"
    });
};