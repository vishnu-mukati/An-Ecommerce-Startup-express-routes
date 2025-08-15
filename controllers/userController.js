const { sendErrorResponse, sendResponse } = require("../utils/response");

const getUser = (req, res, next) => {
     try {
        const user = req.params.id;
        if (user > 10) {
            const err = new Error("user not found");
            err.statusCode = 404;
            throw err;
        }

        return sendResponse(res, user, 200);

    } catch (error) {
        return sendErrorResponse(res, error);
    }
}

const postUser = (req, res, next) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            const err = new Error("Name and Email are required");
            err.statusCode = 400;
            throw err;
        }
        const user = { id: 1, name, email };
        return sendResponse(res, user, 201);
    } catch (error) {
       return sendErrorResponse(res,error)
    }
}

const getUserById = (req, res, next) => {

    try {
        const user = req.params.id;
        if (user > 10) {
            const err = new Error("user not found");
            err.statusCode = 404;
            throw err;
        }

        return sendResponse(res, user, 200);

    } catch (error) {
        return sendErrorResponse(res, error);
    }
}


module.exports = {
    getUser,
    postUser,
    getUserById
}