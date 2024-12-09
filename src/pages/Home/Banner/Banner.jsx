import img1 from '../../../assets/Banner/debby-hudson-asviIGR3CPE-unsplash.jpg'
import img2 from '../../../assets/Banner/national-cancer-institute-N_aihp118p8-unsplash.jpg'
import img3 from '../../../assets/Banner/siora-photography-VtNSaArmb-o-unsplash.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full max-h-screen ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className='absolute flex items-center text-white left-0 h-full bg-gradient-to-r from-[#151515FF] to-[#15151500]'>
                    <h2 className='text-5xl font-bold'>Empowering Collaborative Learning</h2>
                </div>
                <div className="absolute left-5 right-10 bottom-2 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                <div className="absolute left-5 right-10 bottom-2 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                <div className="absolute left-5 right-10 bottom-2 flex -translate-y-1/2 transform justify-end gap-6">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;