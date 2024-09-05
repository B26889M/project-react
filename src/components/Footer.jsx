const Footer = () => {
    return <div className="footer bg-slate-400 shadow mt-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="py-4">
                &copy; Copyright by <span className="text-red-600 font-bold">Bank</span><span className="text-white font-bold">Nusantara</span>
            </p>
            <div className="social-footer flex items-center sm:gap-5 gap-2">
                <button>
                <i className="ri-facebook-circle-fill text-2xl"></i>
                </button>
                <button>
                <i className="ri-twitter-x-fill text-2xl"></i>
                </button>
                <button>
                <i className="ri-linkedin-box-fill text-2xl"></i>
                </button>
                <button>
                <i className="ri-instagram-fill text-2xl"></i>
                </button>
                
            </div>
        </div>
    </div>;
};

export default Footer;