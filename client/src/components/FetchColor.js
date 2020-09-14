import axiosWAuth from '../utils/axiosWAuth';

export default ()=>{ return axiosWAuth.get("http://localhost:5000/api/colors").then(({data: colors})=>{
    return colors;
})};