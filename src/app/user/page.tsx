import PageContainer from "@/components/PageContainer";

import CreateTodo from "./CreateTodo";
import ViewCurrentUser from "./ViewCurrentUser";

export default function Home() {
  return (
    <PageContainer>
      <ViewCurrentUser />
      <CreateTodo />
    </PageContainer>
  )
}
