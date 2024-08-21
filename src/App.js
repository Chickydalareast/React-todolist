import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setwork] = useState("");
  const [todolist, settodolist] = useState([]);
  const addwork = () => {
    if(todolist.some(i =>i.id === work.replace(/\s/g,''))){
      toast.warning("Duplicate work !")

    }else{
      settodolist((pre) => [...pre, {id: work.replace(/\s/g,''),job: work}])
    setwork('')
    }
    
  };
  const deletework =(id)=>{
    settodolist(pre => pre.filter(i => i.id !== id));

  }

  return (
    <>
    <div class="flex bg-slate-500 justify-center h-screen items-center">
      <div className="p-5 rounded-md bg-blue-400 ">
        <h1 className="text-center text-xl font-bold text-white ">
          To Do List
        </h1>
        <div className="flex mt-3 gap-3">
          <input
            value={work}
            onChange={e => setwork(e.target.value)}
            className="text-center rounded-lg p-2 "
            type="text"
          />
          <button
            onClick={addwork}
            type="button"
            className="text-center rounded-lg p-3 bg-yellow-300"
          >
            ADD
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-center text-lg font-extrabold ">Content : </h3>
          <ul>
            {todolist?.map((i) => {
              return (
                <li key={i.id} className=" p-3 bg-gray-400 my-3 rounded-md flex justify-between">
                  <p className=" text-teal-50 text-lg font-bold">{i.job}</p>
                  <div className="flex gap-1">
                    <button className="p-2 bg-green-400 rounded-md px-4 text-white">
                      O
                    </button>
                    <button  onClick={()=>deletework(i.id)} className="p-2 bg-red-400 rounded-md px-4  text-white">
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
  );
}

export default App;
