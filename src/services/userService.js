const user = {
	username: 'admin',
	password: 'admin123',
	fullName: 'John Doe',
};

export const userLoginService = (userInfo) => {
	return userInfo.username === user.username && userInfo.password === user.password && user;
};
