import ResMsg from './ResMsg'

export default interface ResSuccessMessage<T> extends ResMsg<T> {
  status: number
}
