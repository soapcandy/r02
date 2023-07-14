import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import TodoInput from "../components/todo/TodoInput";
import BasicLayout from "../layouts/BasicLayout";

const AboutPage = () => {
  return (
    <BasicLayout>
      <div>About Page</div>
      <TodoInput></TodoInput>

      <CountDisplay></CountDisplay>
      <CountButtons></CountButtons>
    </BasicLayout>
  );
}

export default AboutPage;