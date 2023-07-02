'use client'

import { useMutation } from "@tanstack/react-query";
import { View } from "@aws-amplify/ui-react";
import TodoCreateForm from "@/ui-components/TodoCreateForm";

import { LazyTodo, Todo } from "@/models";
import { DataStore, ModelInit } from "@aws-amplify/datastore";

export default function CreateTodo() {
  const mutation = useMutation({
    async mutationFn (init: ModelInit<LazyTodo>) {
      const todo = await DataStore.save(
        new Todo(init)
      );
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
    </View>
  )
}
