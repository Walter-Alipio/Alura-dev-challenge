export const getProject = ()=>{
    const projectStorage = JSON.parse(localStorage.getItem('project')) || []; 
    return projectStorage;
}