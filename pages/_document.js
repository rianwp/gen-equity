import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document