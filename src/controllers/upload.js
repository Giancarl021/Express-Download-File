module.exports = async function (request, response) {
    return response.redirect(`/?upload=${Boolean(request.files)}`)
}