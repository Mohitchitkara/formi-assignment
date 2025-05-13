exports.isWithinTokenLimit = (text) => {
  return text.split(' ').length <= 800
}
