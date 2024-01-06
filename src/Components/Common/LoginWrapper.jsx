import { importConfig } from "../../assets/Config/importConfig";



export default function LoginWrapper({children}) {

    return (
        <div className="flex h-screen">
            <div className="bg-customShade-1 hidden md:flex flex-col justify-center items-center text-center md:w-1/2 py-7 px-4">
                <img src={importConfig.brandLogo} alt="" className="w-12 mb-3"/>
                <p className="text-customShade-200 font-semibold text-xl">
                    Supercharge your User Experience
                </p>
                <p className="text-customShade-500">
                    Start your journey to unlocking product-driven growth with
                    Quest 💫
                </p>
            </div>
            <div className="w-full md:w-1/2 bg-customShade-2">
                {children}
            </div>
        </div>
    )
}