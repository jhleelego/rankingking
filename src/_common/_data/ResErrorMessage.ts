import ResMsg from './ResMsg'

export default interface ResErrorMessage extends ResMsg<any> {
  status: number
}
