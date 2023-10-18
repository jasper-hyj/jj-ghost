import 'server-only'

const dictionaries: any = {
  "en": () => import('./dictionaries/en-US.json').then((module) => module.default),
  "zh": () => import('./dictionaries/zh-TW.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]();