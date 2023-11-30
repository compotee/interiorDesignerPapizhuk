import { Swiper, SwiperSlide } from "swiper/react";

import "./design-project-style.css";

interface ObjectProps {
    objectData: {
        name: string;
        place: string;
        square: number;
        img: string[];
    }
}

function DesignProject({ objectData } : ObjectProps) {
    return (
        <div className="design-project-div">
            <Swiper
                className="design-project-swiper"
                spaceBetween={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    objectData.img.map((e) => {
                        console.log(e)
                        return (
                            <SwiperSlide
                                className="home-main-img"
                            >
                                <img className="home-main-img" src={e} alt=""/>
                            </SwiperSlide>
                        );
                      })
                }
            </Swiper>
            <p className="design-project-text">{ objectData.name }</p>
            <p  className="design-project-text"> в { objectData.place } | { objectData.square } м²</p>
        </div>
    )
}

export default DesignProject;