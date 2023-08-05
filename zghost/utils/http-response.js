export const render = (res, template, context) =>{
    res.render(template, context)
}

export const responseStatus = (res, status_code) =>{
    res.status(status_code)
}