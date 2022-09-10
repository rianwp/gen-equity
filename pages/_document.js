import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="icon" href="../img/logohitam.ico"/>
      </Head>
      <body className="overflow-x-hidden bg-[#160040]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document