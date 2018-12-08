export default interface AttarkableInterface {
  getHp()
  getAttark()
  canAttark(target: AttarkableInterface)
  attark(target: AttarkableInterface)
}