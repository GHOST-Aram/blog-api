import createHttpError from "http-errors";
import { render } from "./http-response.js";
import { responseStatus } from "./http-response.js";

export const catchErrors = (req, res, next) => {
    next(createHttpError(404));
  }

export const renderErrors = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    responseStatus(res, err.status || 500);
    render(res, 'error', {title: `${err.message}`});
  }