export class errorAPI {
  code: number
  message: string

  constructor(theCode: number, theMessage: string) {
    this.code = theCode
    this.message = theMessage
  }

  static wrongParams(message: string) {
    return new errorAPI(406, message)
  }

  static unauthorized() {
    return new errorAPI(401, 'Unauthorized')
  }

  static badRequest(message: string) {
    return new errorAPI(400, message)
  }

  static notFound(message: string) {
    return new errorAPI(404, message)
  }

  static internal() {
    return new errorAPI(500, 'Internal error')
  }
}
