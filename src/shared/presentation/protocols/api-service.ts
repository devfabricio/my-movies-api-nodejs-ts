import { HttpRequest, HttpResponse } from '../helpers/http/protocols/http'

export interface ApiService {
  execute (request?: HttpRequest): Promise<HttpResponse>
}
