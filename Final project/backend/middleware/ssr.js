const React = require('react')
const ReactDOMServer = require('react-dom/server')

function renderComponent (reactComp, props = {}, options = { htmlOnly: false}) {
    const reactElement = React.createElement(reactComp, {
        ...this.app.locals, // передать app.locals
        ...this.locals, // передать res.locals
        ...props, // передать props
    })

    const html = ReactDOMServer.renderToStaticMarkup(reactElement)
    // const document = `<!DOCTYPE html>${html}`
    return options.htmlOnly ? html : `<!DOCTYPE html>${html}`
}

function ssr (req, res, next) {
    res.renderComponent = renderComponent // наполняем response функцией renderComponent
    next()
}

module.exports = ssr