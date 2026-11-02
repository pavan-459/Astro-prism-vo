import { module } from '@prisma/composer'

import service from './src/service.ts'

export default module("astro-prism-vo", ({ provision }) => {
  provision(service, {
    id: 'web',
    deps: {},
  })
})
