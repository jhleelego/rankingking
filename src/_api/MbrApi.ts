import ResSuccessMessage from '@/_common/_data/ResSuccessMessage'
import { getFetchData, postFetchData } from '@/_common/_net/RestApi'
import { useQuery } from '@tanstack/react-query'

// GET ​/products​/bestcategories​/{categoryId} // 카테고리 별 베스트 상품에 대한 상세 상품 정보를 생성합니다

export const useSample = (categoryId: number) =>
  useQuery({
    queryKey: ['todos'],

    queryFn: () => postFetchData<any, {}>(`/v2/providers/affiliate_open_api/apis/openapi/v1/deeplink`),
    // queryFn: () => getFetchData<any, {}>(`/v2/providers/affiliate_open_api/apis/openapi/v1/products/bestcategories/${categoryId}?limit=100&subId=rankingking`),
  })
