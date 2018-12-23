export default interface AttarkableInterface {
  getHp(): number
  getAttark(): number
  canAttark(target: AttarkableInterface): boolean
  attark(target: AttarkableInterface): void
  getName(): string

  turnAttarkCount: number
  turnAttarkLimit: number
}