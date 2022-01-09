export const getProject = ()=>{
    const projectStorage = JSON.parse(localStorage.getItem('project')) || []; 
    return projectStorage;
}
//trás às informaçẽs do localStorage e caso esteja vazio, retorna um array vazio