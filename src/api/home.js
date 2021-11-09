import { httpRequest } from "../network/request";

export function getHome() {
  return httpRequest({
    url: 'home/multidata'
  })
}