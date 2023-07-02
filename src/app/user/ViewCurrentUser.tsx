'use client'

import {
  useAuthenticator,
  useTheme,
  View,
  Heading,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@aws-amplify/ui-react";

export default function ViewCurrentUser() {
  const theme = useTheme()
  const { authStatus, user, signOut } = useAuthenticator()

  return (
    <View
      maxWidth={theme.breakpoints.values.xl}
      padding={theme.tokens.space.large}>
      <Heading level={5} marginBlockEnd={theme.tokens.space.medium}>認証情報</Heading>
      <Table marginBlockEnd={theme.tokens.space.medium}>
        <TableBody>
          <TableRow>
            <TableCell>username</TableCell>
            <TableCell>{user.username}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>authStatus</TableCell>
            <TableCell>{authStatus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>email</TableCell>
            <TableCell>{user.attributes?.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>phone_number</TableCell>
            <TableCell>{user.attributes?.phone_number}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button onClick={signOut}>ログアウト</Button>
    </View>
  )
}
