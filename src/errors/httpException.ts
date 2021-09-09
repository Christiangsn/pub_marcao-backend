class HttpException extends Error {
    public status

    constructor (msg: string, status: any) {
      super(msg)
      this.status = status
    }
}

export { HttpException }
