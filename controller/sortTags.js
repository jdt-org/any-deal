module.exports = function sortTags(object) {
  return object.map(obj =>
    obj.data.link_flair_css_class
  )
}



