type RoutePaths = string[]

interface Routes {
  AUTH: RoutePaths
  USER: RoutePaths
  ADMIN: RoutePaths
}

const routes: Routes = {
  AUTH: ['/login', '/register', '/error'],
  USER: ['/secure', '/flights/bookings', '/flights/checkout'],
  ADMIN: []
}

export { routes }
