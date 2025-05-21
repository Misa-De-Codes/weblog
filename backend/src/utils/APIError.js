class APIError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'APIError';
        this.status = 'error';
        this.success = false
    }
}

export default APIError;