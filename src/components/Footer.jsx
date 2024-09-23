const Footer = () => {
    return <div className="footer bg-blue-600 shadow mt-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="py-4">
                &copy; Copyright by <span className="text-red-600 font-bold">Warisan</span><span className="text-white font-bold">Rasa</span>
            </p>
            <div className="flex items-center sm:gap-50 gap-10">
                <button>
                    <p>Privasi</p>
                </button>
                <button>
                    <p>Syarat & Ketentuan</p>
                </button>
                <button>
                    <p>Kontak Kami</p>
                </button>
            </div>
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