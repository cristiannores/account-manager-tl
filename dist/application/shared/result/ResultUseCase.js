"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultUseCase = void 0;
var ResultUseCase = /** @class */ (function () {
    function ResultUseCase() {
    }
    ResultUseCase.prototype.SetStatusCode = function (statusCode, success) {
        this.statusCode = statusCode;
        this.success = success;
    };
    ;
    ResultUseCase.prototype.SetMessage = function (message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    };
    ;
    ResultUseCase.prototype.SetError = function (error, statusCode) {
        this.error = error;
        this.statusCode = statusCode;
    };
    ;
    ResultUseCase.prototype.SetData = function (data, statusCode) {
        this.data = data;
        this.statusCode = statusCode;
    };
    ;
    ResultUseCase.prototype.ToResult = function () {
        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            error: this.error,
            data: this.data,
        };
    };
    return ResultUseCase;
}());
exports.ResultUseCase = ResultUseCase;
//# sourceMappingURL=ResultUseCase.js.map