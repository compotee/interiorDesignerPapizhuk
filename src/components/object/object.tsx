import { Swiper, SwiperSlide } from "swiper/react";

import "./object-style.css";

interface ObjectProps {
    objectData: {
        name: string;
        place: string;
        square: number;
        img: string[];
    }
}

function Object({ objectData } : ObjectProps) {
    return (
        <div className="design-projects-div">
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
                          <SwiperSlide>
                            <img src={e} alt=""/>
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

export default Object;