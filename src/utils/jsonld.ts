import type { SougijouDetail } from '~/models/sougijouDetail'

interface PostalAddress {
  '@type': 'PostalAddress'
  'streetAddress': string
  'addressLocality': string
  'addressRegion': string
  'postalCode': string
  'addressCountry': {
    '@type': 'Country'
    'name': string
  }
}

interface GeoCoordinates {
  '@type': 'GeoCoordinates'
  'latitude': number
  'longitude': number
}

interface LocalBusiness {
  '@context': 'https://schema.org'
  '@type': 'LocalBusiness'
  'image': string
  'name': string
  'address': PostalAddress
  'geo': GeoCoordinates
  'url': string
  'priceRange': string
  'description': string
}

export const getSougijouJsonLd = async (sougijous: SougijouDetail[]): Promise<LocalBusiness[] | undefined> => {
  if (sougijous.length === 0)
    return undefined

  const planInfo = await usePlanStore().getPlanData()
  const plan = planInfo.Chokusou

  // JSON-LD データの作成
  const sougijouJsonLds: LocalBusiness[] = sougijous.map(sougijouDetail => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'image': sougijouDetail.image,
    'name': sougijouDetail.name,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': sougijouDetail.city.municipalitieSubName,
      'addressLocality': sougijouDetail.city.municipalitieName,
      'addressRegion': sougijouDetail.city.prefectureName,
      'postalCode': sougijouDetail.city.code,
      'addressCountry': {
        '@type': 'Country',
        'name': 'JP',
      },
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': sougijouDetail.latitude,
      'longitude': sougijouDetail.longitude,
    },
    'url': `${sougijouDetail.getSougijouPath()}`,
    'priceRange': `${plan.discountPriceIncludeTax}円(税込)〜`,
    'description': `${sougijouDetail.name}は${sougijouDetail.address}にある葬儀場で、アクセスは${sougijouDetail.access.substring(0, sougijouDetail.access.indexOf('\n'))}です。【1日葬・家族葬のこれから】では、大手葬儀社の葬儀場で家族葬を安価で執り行えます。事前のご相談も無料で24時間365日受け付けております。`,
  }))
  return sougijouJsonLds
}
