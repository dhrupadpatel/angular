(function(){

	var app = angular.module('login');

	app.provider('UsersService', function(){
		var _MIN_PASSWORD_LENGTH = 4;
		var _users = [
						{
							email: "dhrupad.patel@actonate.com",
							password: "123456"
						},
						{
							email: "alpesh.nakrani@actonate.com",
							password: "123456"
						}
					];

		return {
			$get: function(){
				return {
					login: function(_user){
						console.log(_MIN_PASSWORD_LENGTH);
						if(!(_user.password.length >= _MIN_PASSWORD_LENGTH )){
							return false;
						}

						//find the user
						for(var i=0; i<_users.length; i++){
							if(_users[i].email === _user.email && _users[i].password === _user.password){
								return true;
								
							}
						}
						return false;
					},
					add: function(_user){
						if(!(_user.password.length >= _MIN_PASSWORD_LENGTH )){
							return false;
						}

						_users.push(_user);
						return true;
					}
				};
			},
			setMinPasswordLength: function(_length){
				_MIN_PASSWORD_LENGTH = _length;
			}
		};
	});

})();