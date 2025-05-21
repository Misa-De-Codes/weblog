class APIResponse {
    constructor( statusCode, message, data = null ) {
        this.statusCode = statusCode;
        this.message = message;
        this.status = statusCode >= 400 ? 'error' : 'success';
        this.success = true;
        this.data = data  
    }
}

export default APIResponse;