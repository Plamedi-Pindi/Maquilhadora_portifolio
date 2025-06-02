import { Nuvem, Gancho, Barra } from "../components/StylesItems";

const Home = () => {
    return (
        <div className="w-full relative">
            <header className="w-full  ">
                <div className="relative  w-full h-screen  overflow-hidden flex flex-col justify-center items-center">
                    <Nuvem posiction='-top-10 -right-10' />
                    <Nuvem posiction='-left-20 -bottom-20' />
                    <Gancho posiction='-top-4 -left-5' />
                    <Barra posiction='-top-2' height='h-40' />
                    <Barra posiction='-bottom-2' height='h-28' />

                    <p className="text-6xl h_font -mb-6">Isis</p>
                    <p className="text-6xl font-bold h_font"> Amaro</p>
                    <p className="p-font text-3xl mb-2">Midia Kit</p>
                    <button className="border border-[#ff006b] w-76 rounded-md text-sm p-2 later-2 tracking-[0.2rem] ">Maquilhadora profissional</button>

                </div>
                <img src="./pic1.png " className="w-full" />
            </header>
        </div>
    );
}

export default Home