import { getFetchData } from '@/_common/_net/RestApi'
import { useQuery } from '@tanstack/react-query'

// GET ​/products​/bestcategories​/{categoryId} // 카테고리 별 베스트 상품에 대한 상세 상품 정보를 생성합니다

export const useSample = (categoryId: number) =>
  useQuery({ queryKey: ['todos'], queryFn: () => getFetchData<any[], {}>(`products​/bestcategories​/${categoryId}`) })
