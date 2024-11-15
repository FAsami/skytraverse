type RoutePaths = string[]

interface Routes {
  AUTH: RoutePaths
  USER: RoutePaths
  ADMIN: RoutePaths
}

const routes: Routes = {
  AUTH: ['/login', '/register', '/error'],
  USER: ['/flights/bookings', '/flights/checkout', '/account/*'],
  ADMIN: []
}

export { routes }
