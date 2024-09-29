'use client'

import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter as useNavigation } from 'next/navigation'

export interface ParseDataProps {
  goToPathname: string
  params: string
}

export const useRouter = () => {
  const route = useNavigation()

  return {
    replace: (href: string, options?: NavigateOptions | undefined): void => {
      route.replace(href, options)
    },
    push: (href: string, options?: NavigateOptions | undefined): void => {
      route.push(href, options)
    },
    back: () => {
      route.back()
    },
    refresh: () => {
      route.refresh()
    },
  }
}
