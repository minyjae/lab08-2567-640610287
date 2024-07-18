import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";


export default function Home() {
  const tasksData = [
    { id: 1, title: "Read a book", isDone: true },
    { id: 2, title: "Take a shower", isDone: false },
    { id: 3, title: "Sleep", isDone: false },
  ];

  // const tasks = tasksData.map(tasksData => new TaskClass(tasksData.id, tasksData.title, tasksData.isDone));
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />
        {/* task detail*/}
        <Task {...tasksData[0]} />
        <Task {...tasksData[1]} />
        <Task {...tasksData[2]} /> 
      </div>
      {/* //footer section */}
      <Footer year = "2024" fullName = "Jiradate Oratai" studentId = "640610287"/>
    </div>
  );
}
