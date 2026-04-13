import React,{useState} from "react";

function StudentTable(){

    const studentsData = [ { id: 1, name: "Abhilash", branch: "CSE" },
        { id: 2, name: "Rahul", branch: "ECE" },
        { id: 3, name: "Sneha", branch: "IT" }, 
        { id: 4, name: "Kiran", branch: "CSE" },
        { id: 5, name: "Divya", branch: "EEE" },
        { id: 6, name: "Vamsi", branch: "MECH" }, 
        { id: 7, name: "Anjali", branch: "CIVIL" }, 
        { id: 8, name: "Ravi", branch: "IT" },
        { id: 9, name: "Pooja", branch: "CSE" }, 
        { id: 10, name: "Arjun", branch: "ECE" }, 
        { id: 11, name: "Teja", branch: "EEE" },
        { id: 12, name: "Suresh", branch: "MECH" } ];
        const[searchQueary,setSearchQueary]=useState("");
        const[currentPage,setCurrentPage]=useState(1);
        const studentsPerPage=5;
        const filteredStudents=studentsData.filter((student)=>
            student.name.toLowerCase().includes(searchQueary.toLowerCase()));
        
        const lastIndex=currentPage*studentsPerPage;
        const firstIndex=lastIndex-studentsPerPage;
        const currentStudents=filteredStudents.slice(firstIndex,lastIndex);

        const totalPages=Math.ceil(filteredStudents.length/studentsPerPage);

        return(
            <div style={{textAlign:"center"}}>
                <h1>Student Table</h1>
                <input type="text" placeholder="enter the name" value={searchQueary} onChange={(e)=>{setSearchQueary(e.target.value);setCurrentPage(1)}} />
                <table border="5" cellPadding={10} cellSpacing={10} >
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Branch</th>
                    </thead>
                    <tbody>
                         {currentStudents.length>0 ?
                            currentStudents.map((students)=>(
                                <tr key={(students.id)}>
                                    <td>{students.id}</td>
                                    <td>{students.name}</td>
                                    <td>{students.branch}</td>
                                </tr>
                            )):
                            <tr>
                                <td colSpan="3">No students found</td>
                            </tr>
                            }
                    </tbody>
                </table>
                <div>
                    <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>Previous</button>
                    <span >Page {currentPage} of {totalPages}</span>
                    <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
                </div>
            </div>
        )
    }
   export default StudentTable;
