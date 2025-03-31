import { isDev } from "../../shared/isDev"

function deviffyRoute(route: `/${string}/`) {

  const dividedString = route.split("")
  const curedRoute = dividedString.toSpliced(route.length - 1, route.length)
  
  const deviffiedRoute = curedRoute.join("")

  return isDev ? deviffiedRoute : route
}

export {deviffyRoute}