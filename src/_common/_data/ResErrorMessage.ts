import ResMsg from './ResMsg'

export default interface ResErrorMessage extends ResMsg<any> {
  code: string
  message: string
  transactionId: string
}
