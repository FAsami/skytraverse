type RoutePaths = string[]

interface Routes {
  AUTH: RoutePaths
  USER: RoutePaths
  ADMIN: RoutePaths
}

const routes: Routes = {
  AUTH: ['/login', '/register', '/error'],
  USER: ['/secure'],
  ADMIN: []
}

export { routes }
