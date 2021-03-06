var addon = require('../native');

function mkdirs(p, opts, f, made) {
  if (typeof opts === 'function') {
    f = opts;
    opts = {};
  } else if (!opts || typeof opts !== 'object') {
    opts = {
      mode: opts
    };
  }

  var mode = opts.mode;
  var xfs = opts.fs || addon;
  xfs.mkdirsAsync(p, (err, result) => {
  })
}

module.exports = mkdirs