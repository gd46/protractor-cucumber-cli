module.exports = {
	getBaseUrl(env) {
  	var environments = {
  		'github': 'http://github.com'
  	}
  	return environments[env];
  }
}