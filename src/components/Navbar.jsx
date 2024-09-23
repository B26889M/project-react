import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setShow(!show);
        // console.log(show);
    };

    let menuActive = show ? "left-0" : "-left-full"

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                // console.log("test")
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false)
            }
        });
    });

    let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4"
    
    return <div className={`navbar fixed w-full transition-all ${scrollActive} bg-opacity-70`}>
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <button>
                    <h1 className="sm:text-2x1 text-x1 font-bold"><span className="text-red-600 font-bold">Warisan</span><span className="text-slate-400 font-bold">Rasa</span></h1>
                    </button>  
                </div>
                <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-20 rounded shadow-lg shadow-slate-700 bg-blue-700 font-bold text-white transition-all`}>
                    <li>
                        {/* <a href="" className="font-medium opacity-75">BERANDA</a> */}
                    </li>
                    <li>
                        <a href="" className="font-medium opacity-75">MAKANAN</a>
                    </li>
                    <li>
                        <a href="" className="font-medium opacity-75">MINUMAN</a>
                    </li>
                    <li>
                        <a href="" className="font-medium opacity-75">REKOMENDASI</a>
                    </li>
                    <li>
                        <a href="" className="font-medium opacity-75">PROMO</a>
                    </li>
                    <li>
                        <a href="" className="font-medium opacity-75">TENTANG KAMI</a>
                    </li>
                </ul>
                <div className="login flex items-center gap-2">
                    <a href="" className="bg-blue-700 px-5 py-2 rounded-full text-white font-bold hover:bg-blue-800 transition-all">LOGIN</a><i class="ri-menu-line text-3x1 md:hidden block" onClick={handleClick}></i>
                </div>
            </div>
        </div>
    </div>;
};

export default Navbar;