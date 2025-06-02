
import "./StylesItems.css"
export const Nuvem = ({posiction})=> {
    return <div className= {`nuvem rounded-full absolute ${posiction}`}></div>
} 

export const Gancho = ({posiction})=> {
    return <div className= {`rounded-full absolute border border-[#ff006b] w-10 h-36 ${posiction}`}></div>
} 

export const Barra = ({posiction, height})=> {
    return <div className= {`rounded-full absolute  bg-[#fff] w-[0.05rem]  ${posiction} ${height} `}></div>
} 