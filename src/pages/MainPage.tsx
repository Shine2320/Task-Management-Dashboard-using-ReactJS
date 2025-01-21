import TableComponent from "../components/ListTasks";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTaskContext } from "../context/TaskContext";
import LoadingSpinner from "../components/Loading";

export const MainPage = () => {
  const { tasks, loading, error } = useTaskContext();
  if (loading)
    return (
      <p>
        <LoadingSpinner></LoadingSpinner>
      </p>
    );
  if (error) return <p>{error}</p>;
  return (
    <div className="MainDiv">
      <Header></Header>
      <div className="container" style={{ height: "100%", paddingTop: 20 }}>
        <TableComponent data={tasks} />
      </div>
      <Footer></Footer>
    </div>
  );
};
