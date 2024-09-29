import ResMsg from './ResMsg'

export default interface ResSuccessMessage<T> extends ResMsg {
  rCode: string
  rMessage: string
  data: T
}
