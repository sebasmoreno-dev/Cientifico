const resolveRoutes = (route) => {
    if (route != 'about') {
        if (route === '/') {
            return route
        } else if (route.length <= 3) {
            return '/:id'
        } else if (route.includes('pages')) {
            return '/:page'
        }
    }
    return `/${route}`;
}

export default resolveRoutes;