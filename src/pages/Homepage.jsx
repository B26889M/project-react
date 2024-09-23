import background from '../assets/foto.jpg'
import HeroImage1 from '../assets/images.jpeg'
import HeroImage2 from '../assets/images1.jpeg'
import HeroImage3 from '../assets/images2.jpeg'
import HeroImage4 from '../assets/images3.jpg'
import HeroImage5 from '../assets/images4.jpeg'
import HeroImage6 from '../assets/images5.jpg'
import HeroImage7 from '../assets/images6.jpg'
import HeroImage8 from '../assets/cendol.jpg'
import HeroImage9 from '../assets/bajigur.jpg'
import HeroImage10 from '../assets/wedang.jpg'

const Homepage = () => {
    return (
        <div className="Homepage pb-10">
            <div className="container mx-auto px-4">
                <div className="relative" id="Home">
                <img src={HeroImage1} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-32 gap-40">
                        <div className="box">
                            <h1 className="text-5xl font-extrabold mb-7 text-red-500">Warisan</h1><h1 className="text-5xl font-extrabold mb-7 text-white">Rasa</h1>
                            <p className="text-base mb-12 font-medium">Jelahahi Rasa dan Budaya, Nikmati Kekayaan Makanan Nusantara di Setiap Suapan. Siap untuk mencicipi Makanan Khas Indonesia?</p>
                            <a href="#" className="bg-white hover:bg-red-600 transition-all py-3 px-12 text-black shadow rounded-full font-medium">Beli Sekarang</a>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-violet-100/50"></div>
            </div>
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                    <h1 className='lg:text-5x1/tight text-3x1 font-medium mb-7'>
                        Tentang kami
                    </h1>
                    <p className='text-base/8 mb-7'>Selamat datang di Warisan Rasa, tempat di mana cita rasa dan keanekaragaman kuliner Nusantara berpadu dalam harmoni. Kami berkomitmen untuk menyajikan hidangan autentik dari berbagai daerah di Indonesia, menggunakan bahan-bahan segar dan resep turun-temurun yang telah teruji. Dengan suasana yang hangat dan pelayanan ramah, kami mengundang Anda untuk menjelajahi kelezatan dan kekayaan budaya kuliner tanah air. Bergabunglah dengan kami dalam perjalanan rasa yang tak terlupakan!. Ingin tau lanjut tentang kami?</p>
                    <a href="" className='bg-slate-700 hover:bg-slate-800 text-white transition-all py-2 px-4 shadow rounded-full'>
                        Tentang kami
                    </a>
                    </div>
                    <div className="box">
                        <img src={background} alt="" className="md:w-full w-[400px] mx-auto md:m-0" />
                    </div>
                </div>
                <div className="layanan pt-32">
                    <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 text-center">Makanan Yang di Rekomendasikan</h1>
                    <div className="kotak-layanan pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage3} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Kerak Telur</h3>
                                <p className="text-black font-bold">Rp 25.000</p>
                                <p className="text-black">Jenis Makanan : Nasi </p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage4} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Mie Aceh</h3>
                                <p className="text-black font-bold">Rp 25.000</p>
                                <p className="">Jenis Makanan : Mie</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                                
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage5} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Ayam Penyek</h3>
                                <p className="text-black font-bold">Rp 25.000</p>
                                <p>Jenis Makanan : Ayam</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage6} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Karedok</h3>
                                <p className="text-black font-bold">Rp 25.000</p>
                                <p>Jenis Makanan : Tempe, Sayuran</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage2} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Nasi Pecel</h3>
                                <p className="text-black font-bold">Rp 25.000</p>
                                <p>Jenis Makanan : Nasi, Sayuran</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage7} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Rendang</h3>
                                <p className="text-black font-bold">Rp 25.000</p>
                                <p>Jenis Makanan : Daging</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="layanan pt-32">
                    <h1 className="lg:text-5xl/tight text-3xl font-medium mb-2 text-center">MInuman Yang di Rekomendasikan</h1>
                    <div className="kotak-layanan pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage8} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Es Cendol</h3>
                                <p className="text-black font-bold">Rp 15.000</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage9} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Bajigur</h3>
                                <p className="text-black font-bold">Rp 15.000</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                                
                            </i>
                        </div>
                        <div className="kotak bg-blue-600 rounded-lg shadow p-4">
                            <i className="ri-number">
                                <img src={HeroImage10} alt="" className="w-full h-[220px]" />
                                <h3 className="text-xl font-bold text-black mt-6 mb-2">Wedang Jahe</h3>
                                <p className="text-black font-bold">Rp 15.000</p>
                                <div className='flex justify-center mt-10'>
                                    <button className="bg-white font-bold rounded-lg hover:bg-blue-700 py-1 px-20 mt-10">Beli Sekarang</button>
                                </div>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;