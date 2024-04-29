function Slider() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="carousel h-[50%]">
        <div id="slide1" className="carousel-item relative w-full rounded-2xl">
          <img
            src="https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=800"
            className=" rounded-2xl w-full h-[80%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://images.pexels.com/photos/6483239/pexels-photo-6483239.jpeg?auto=compress&cs=tinysrgb&w=800"
            className=" rounded-2xl w-full h-[80%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/18861249/pexels-photo-18861249/free-photo-of-view-of-the-matterhorn-in-swiss-alps.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="rounded-2xl w-full h-[80%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
