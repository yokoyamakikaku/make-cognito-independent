import Providers from "@/components/Providers"

export const metadata = {
  title: 'DynamoDB Back Up and Restore',
  description: 'DynamoDBのバックアップと復元の検証',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
