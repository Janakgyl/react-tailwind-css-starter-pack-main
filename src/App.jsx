import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function FetchData() {
    try {
      setLoading(true);
      const fetchApi = await fetch(apiUrl);
      const jsonResponse = await fetchApi.json();
      setCourses(jsonResponse.data);
      setLoading(false);
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <NavBar />
      </div>

      <div className="bg-bgDark2">
        <Filter categories={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {loading ? <Spinner/> : <Cards courses={courses} category={category}/>}  
      </div>
    </div>
  );
}

export default App;
