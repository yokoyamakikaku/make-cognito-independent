"use client"

import Link from "next/link"
import { View, Flex, Card, Heading, Button, Text, useTheme } from "@aws-amplify/ui-react"

const ViewNavigation = () => {
  const { tokens: { space } } = useTheme()
  return (
    <View>
      <Flex>
        <Card variation="outlined" padding={space.medium} minWidth={320}>
          <Heading
            level={4}
            paddingBlockStart={space.small}
            marginBlockEnd={space.small}>
              ユーザー
          </Heading>
          <Text marginBlockEnd={space.small}>認証後のユーザの動作確認</Text>
          <Flex justifyContent="flex-end">
            <Link href="/user">
              <Button variation="primary">ログインする</Button>
            </Link>
          </Flex>
        </Card>
        <Card variation="outlined" padding={space.medium} minWidth={320}>
          <Heading
            level={4}
            paddingBlockStart={space.small}
            marginBlockEnd={space.small}>
              未認証ユーザ
          </Heading>
          <Text marginBlockEnd={space.small}>未認証のユーザの動作確認</Text>
          <Flex justifyContent="flex-end">
            <Link href="/guest">
              <Button variation="primary">動作確認する</Button>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </View>
  )
}

export default ViewNavigation
