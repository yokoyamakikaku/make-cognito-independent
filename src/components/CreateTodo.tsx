'use client'

import { useMutation } from "@tanstack/react-query"
import { Alert, View } from "@aws-amplify/ui-react"
import TodoCreateForm from "@/ui-components/TodoCreateForm"


import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api"
import { CreateTodoInput, CreateTodoMutation, CreateTodoMutationVariables, Todo } from "@/API"
import * as mutations from '@/graphql/mutations'

export default function CreateTodo() {
  const mutation = useMutation({
    async mutationFn (input: CreateTodoInput) {
      const result = (await API.graphql(
        graphqlOperation(mutations.createTodo, {
          input
        } as CreateTodoMutationVariables)
      )) as GraphQLResult<CreateTodoMutation>
      if (result.errors) throw result.errors
      return result.data?.createTodo as Todo
    }
  })

  return (
    <View>
      <TodoCreateForm
        onSubmit={values => {
          mutation.mutate({
            name: values.name ?? '',
            description: values.description ?? '',
          })
          return values
        }} />
      {mutation.isLoading && <Alert variation="info">作成中</Alert>}
      {mutation.isError && <Alert variation="error">エラー</Alert>}
      {mutation.isSuccess && <Alert variation="success">作成しました</Alert>}
    </View>
  )
}
