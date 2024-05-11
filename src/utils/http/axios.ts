import Taro from '@tarojs/taro';
import {store} from "@/store";
import {setLoading} from "@/store/loadingSlice";

// 设置全局默认配置
// Taro.request.defaults.baseUrl = 'https://your-api-url.com'; // 设置默认的基础URL
// Taro.request.defaults.header = {
//   'Content-Type': 'application/json', // 设置默认的头信息
//   'Authorization': 'Bearer your-token' // 示例：添加默认的认证头
// };

export const setupInterceptors = () => {
  // 添加请求拦截器
  Taro.addInterceptor((chain) => {
    const { requestParams } = chain;
    // 在请求发送前修改请求参数
    const newRequestParams = {
      ...requestParams,
      header: {
        'Content-Type': 'application/json', // 设置默认的头信息
        'Authorization': 'Bearer your-token', // 示例：添加默认的认证头
        ...requestParams.header,
      }
    };
    // 在请求开始时设置加载状态为 true
    store.dispatch(setLoading({ url: requestParams.url, isLoading: true }));

    return chain.proceed(newRequestParams).then((response) => {

      // 请求成功，设置加载状态为 false
      store.dispatch(setLoading({ url: requestParams.url, isLoading: false }));

      // 检查响应状态码
      if (response.statusCode !== 200) {
        Taro.showToast({
          title: `Error: ${response.statusCode} ${response.data.message || ''}`,
          icon: 'none',
          duration: 2000
        });
        return Promise.reject(response.data);
      }
      // 如果状态码为200，返回处理后的数据
      return response.data;
    }).catch((error) => {
      // 请求失败，设置加载状态为 false
      store.dispatch(setLoading({ url: requestParams.url, isLoading: false }));

      Taro.showToast({
        title: 'Network error, please try again later.',
        icon: 'none',
        duration: 2000
      });
      return Promise.reject(error);
    });
  });
};

export default setupInterceptors;
