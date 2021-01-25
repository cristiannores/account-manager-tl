export interface ResultUseCaseInterface  {

    statusCode: number | string;
    success: boolean;
    message: string;
    error: string;
    SetStatusCode(statusCode: number | string, success: boolean): void;
    SetMessage(message: string, statusCode: number | string): void;
    SetError(error: string, statusCode: number | string): void;
    ToResult(): {
        statusCode: number | string;
        success: boolean;
        message: string;
        error: string;
        data: unknown
    };
}
