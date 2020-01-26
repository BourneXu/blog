import { MDXProvider } from '@mdx-js/tag'

import Head from './helpers/head'
import theme from '../theme'

export default meta => ({ children }) => <MDXProvider components={theme.components}><>
  <Head>
    <title>Chao's Blog | {meta.title}</title>
    <meta property="og:description" content={meta.description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Chao Xu" />
    <meta name="twitter:description" content={meta.description} />
  </Head>
  <theme.Container>
    <theme.components.h1>Chao Xu</theme.components.h1>
    <theme.Nav url={meta.url} />
    <theme.Content>{children}</theme.Content>
    <theme.Footer />
  </theme.Container>
</></MDXProvider>