import Mock from 'mockjs';

Mock.mock('/api/login', 'post', {
  status: 'success',
  data: {
    id: 1,
    username: 'admin',
    token: 'fake-jwt-token'
  }
});

Mock.mock('/api/users/info', 'get', {
  status: 'success',
  data:  { id: 2, username: 'admin' }
});
