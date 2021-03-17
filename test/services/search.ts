import axios, { AxiosResponse } from 'axios';
import { siteUrl } from '../config';
import { GeneralSearch } from '../types/search';
import { BaseService } from './base';

export class Search extends BaseService {

  general(search: GeneralSearch): Promise<AxiosResponse<any>> {
    return axios.get(
      `${siteUrl.api}/Search/General.json`,
      {
        params: search,
        headers: { Authorization: this.appAuthentication() }
      }
    );
  }

}
