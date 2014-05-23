module.exports = function(num) {
  var evenMask = parseInt('aaaaaaaa', 16)
    , oddMask  = parseInt('55555555', 16)

  return  ( ((num & evenMask) >> 1) | ((num & oddMask) << 1) )

}
