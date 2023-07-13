import { Link, Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";


const IndexPage = () => {
  return (
    <BasicLayout>
      <div className="mt-4 p-4 bg-green-500 text-2xl text-white flex justify-center">
        <div className="underline font-extrabold m-2 p-2">
          <Link to={'List'}>List</Link>
        </div>
        <div className="underline font-extrabold m-2 p-2">
          <Link to={'register'}>Register</Link>
        </div>
      </div>
      <div className="h-[50vh] bg-white w-full border-2 ">
        <Outlet></Outlet>
      </div>
    </BasicLayout>
  );
}

export default IndexPage;