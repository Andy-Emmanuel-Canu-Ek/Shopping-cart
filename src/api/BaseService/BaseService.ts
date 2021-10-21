import { AxiosError, AxiosRequestConfig } from "axios";
import environment from 'shared/constants/environment';
const { reactAppApiUrl } = environment;

class BaseService {
  protected url: string | undefined = reactAppApiUrl;

  protected getHeaders(params?: any) {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Token Here`,
      },
      params,
    };
    return config;
  }

  protected handleError(error: AxiosError & Error) {
    if (error.response) {
      // throw new Error(error.response.data);
    } else {
      throw new Error(error.message);
    }
  }
}
export default BaseService;
