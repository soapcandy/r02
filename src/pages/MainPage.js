import BasicLayout from "../layouts/BasicLayout";



const MainPage = () => {

    console.log("main go")
    return (
        <div  className="bg-cover bg-no-repeat">
          <BasicLayout></BasicLayout>
          <div className="text-center text-3xl font-bold ">
            <p>This is main Page</p>
            <p>It is Board</p>
            <p>This board side only works search and read list </p>
            <p>Reply area works CRUD process</p>
            <p>When user clicks, page number and search URL is going to be changed </p>
            <p>Also, Process is included by Power point in same git repository</p>
            <div className="flex justify-center items-center">
          </div>
        </div>
      </div>
      );
}
 
export default MainPage;
