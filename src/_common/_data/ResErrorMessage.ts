import ResMsg from './ResMsg'

export default interface ResErrorMessage extends ResMsg {
  code: string
  message: string
  transactionId: string
}
