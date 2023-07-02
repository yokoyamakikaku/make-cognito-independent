import Providers from "./Providers"

export const metadata = {
  title: 'DynamoDB Back Up and Restore',
  description: 'DynamoDBのバックアップと復元の検証',
}

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
