export default (base, limit) => {
  const exponent = Math.floor(Math.log(base) / Math.LN10 + 0.000000001)
  let raised = Math.pow(10, exponent)
  if (limit && raised > limit) {
    raised = limit
  }
  return raised
}
