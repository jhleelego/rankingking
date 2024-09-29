export default interface ResMsg<T> {
  status: number
  rCode: string
  rMessage: string
  data: T
}
