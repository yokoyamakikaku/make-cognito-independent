'use client'

import { API, graphqlOperation } from "@aws-amplify/api";
import * as mutations from '@/graphql/mutations'

import TodoCreateForm from "@/ui-components/TodoCreateForm";
import {
  View,
} from "@aws-amplify/ui-react";
import {
  CreateTodoMutationVariables,
  CreateTodoInput
} from "@/API";


export default function CreateTodo() {
  const create = async (input: CreateTodoInput) => {
    await API.graphql(graphqlOperation(mutations.createTodo, {
      input
    } as CreateTodoMutationVariables))
    alert("作成しました")
  }

  return (
    <View>
      <TodoCreateForm
        onSubmit={values => {
          create({
            name: values.name ?? '',
            description: values.description ?? '',
          })
          return values
        }} />
    </View>
  )
}
