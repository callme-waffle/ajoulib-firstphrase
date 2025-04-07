import axios, { 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse, 
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios';

// API 응답 타입 정의
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
}

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 토큰이 있는 경우 헤더에 추가
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // 에러 처리
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 인증 에러 처리
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          // 권한 에러 처리
          console.error('접근 권한이 없습니다.');
          break;
        case 404:
          // 리소스 없음
          console.error('요청한 리소스를 찾을 수 없습니다.');
          break;
        case 500:
          // 서버 에러
          console.error('서버 에러가 발생했습니다.');
          break;
        default:
          console.error('알 수 없는 에러가 발생했습니다.');
      }
    }
    return Promise.reject(error);
  }
);

// API 요청 메서드
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    axiosInstance.get(url, config).then((response) => response.data),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    axiosInstance.post(url, data, config).then((response) => response.data),

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    axiosInstance.put(url, data, config).then((response) => response.data),

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> =>
    axiosInstance.delete(url, config).then((response) => response.data),
};

export default axiosInstance; 