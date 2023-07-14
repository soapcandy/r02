import CountButtons from "../components/counter/CountButtons";
import CountDisplay from "../components/counter/CountDisplay";
import BasicLayout from "../layouts/BasicLayout";

const AboutPage = () => {
  return (
    <BasicLayout>
      <div>About Page</div>

      <CountDisplay></CountDisplay>
      <CountButtons></CountButtons>
    </BasicLayout>
  );
}
 
export default AboutPage;