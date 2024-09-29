import ResMsg from './ResMsg'

export default interface ResSuccessMessage<T> extends ResMsg<T> {
  rCode: string
  rMessage: string
  data: T
}
