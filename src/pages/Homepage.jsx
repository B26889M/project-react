import HeroImage from '../assets/bank.jpg'
import syariah from '../assets/syariah.jpg'
import HeroImage1 from '../assets/image1.png'
import transfer from '../assets/transfer.png'
import transaksi from '../assets/transaksi.jpg'
import karir from '../assets/karir.png'
import content from '../assets/apartemen.jpg'

const Homepage = () => {
    return (
        <div className="Homepage pb-10">
            <div className="container mx-auto px-4">
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                    <h1 className='lg:text-5x1/tight text-9x1 font-medium mb-7'>
                    Tumbuh Bersama, Maju bersama <span className="text-red-600 font-bold">Bank</span><span className="text-slate-400 font-bold">Nusantara</span>, Mitra Keuangan Anda.
                    </h1>
                    <p className='text-base/8 mb-7'>Apakah Anda Siap? </p>
                    <a href="" className='bg-slate-700 hover:bg-slate-800 text-white transition-all py-2 px-4 shadow rounded-full'>
                        Mulai Sekarang
                    </a>
                    </div>
                    <div className="box">
                        <img src={HeroImage} alt="" className="md:w-full w-[400px] mx-auto md:m-0" />
                    </div>
                </div>
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                    <h1 className='lg:text-5x1/tight text-3x1 font-medium mb-7'>
                        Tentang kami
                    </h1>
                    <p className='text-base/8 mb-7'>Bank Nusantara dibangun pada 2010 dan mendapatkan penghargaan sebagai bank terbaik di indonesia. Ingin tau tentang kami? </p>
                    <a href="" className='bg-slate-700 hover:bg-slate-800 text-white transition-all py-2 px-4 shadow rounded-full'>
                        Tentang kami
                    </a>
                    </div>
                    <div className="box">
                        <img src={content} alt="" className="md:w-full w-[400px] mx-auto md:m-0" />
                    </div>
                </div>
                <div className="layanan pt-32">
                    <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 text-center">Layanan kami yang lainnya</h1>
                    <div className="kotak-layanan pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="kotak bg-slate-400 rounded-lg shadow p-4">
                            <i className="ri-number text-center">
                                <img src={syariah} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">SYARIAH</h3>
                                <button className="bg-white font-bold rounded-lg hover:bg-slate-500 py-1 px-20 mt-10">Selengkapnya</button>
                            </i>
                        </div>
                        <div className="kotak bg-slate-400 rounded-lg shadow p-4">
                            <i className="ri-number text-center">
                                <img src={HeroImage1} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">CORPORATE</h3>
                                <button className="bg-white font-bold rounded-lg hover:bg-slate-500 py-1 px-20 mt-10">Selengkapnya</button>
                            </i>
                        </div>
                        <div className="kotak bg-slate-400 rounded-lg shadow p-4">
                            <i className="ri-number text-center">
                                <img src={transfer} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">TRANSFER</h3>
                                <button className="bg-white font-bold rounded-lg hover:bg-slate-500 py-1 px-20 mt-10">Selengkapnya</button>
                            </i>
                        </div>
                        <div className="kotak bg-slate-400 rounded-lg shadow p-4">
                            <i className="ri-number text-center">
                                <img src={transaksi} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">TRANSAKSI</h3>
                                <button className="bg-white font-bold rounded-lg hover:bg-slate-500 py-1 px-20 mt-10">Selengkapnya</button>
                            </i>
                        </div>
                        <div className="kotak bg-slate-400 rounded-lg shadow p-4">
                            <i className="ri-number text-center">
                                <img src={karir} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">KARIR</h3>
                                <button className="bg-white font-bold rounded-lg hover:bg-slate-500 py-1 px-20 mt-10">Selengkapnya</button>
                            </i>
                        </div>
                        <div className="kotak bg-slate-400 rounded-lg shadow p-4">
                            <i className="ri-number text-center">
                                <img src={HeroImage} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-white mt-6 mb-2">TENTANG KAMI</h3>
                                <button className="bg-white font-bold rounded-lg hover:bg-slate-500 py-1 px-20 mt-10">Selengkapnya</button>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;