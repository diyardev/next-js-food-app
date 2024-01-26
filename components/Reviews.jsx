import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper/modules";

const Reviews = () => {
  return (
    <div className=" p-[2rem] dark  bg-black text-foreground  md:p-[5rem] w-full">
      <p className="font-dancing text-5xl text-center p-2 mb-10">Reviews</p>
      <div>
        <>
          <Swiper
            loop
            centeredSlides={true}
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCards]}
          >
            <SwiperSlide className="">
              <Card className="mx-auto max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://nextui.org/avatars/avatar-1.png"
                    width={40}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-md">Tasha Mccormick</p>
                    <p className="text-small text-default-500">
                      Non proident excepteur{" "}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Pariatur cupidatat exercitation fugiat tempor in deserunt
                    sit. Irure sit voluptate esse aute.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter className="justify-end">
                  <p className="text-warning ">02.11.2025</p>
                </CardFooter>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="mx-auto max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://nextui.org/avatars/avatar-6.png"
                    width={40}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-md">Tasha Mccormick</p>
                    <p className="text-small text-default-500">
                      Non proident excepteur{" "}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Pariatur cupidatat exercitation fugiat tempor in deserunt
                    sit. Irure sit voluptate esse aute.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter className="justify-end">
                  <p className="text-warning ">21.08.2025</p>
                </CardFooter>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="">
              <Card className="mx-auto max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://nextui.org/avatars/avatar-3.png"
                    width={40}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-md">Tasha Mccormick</p>
                    <p className="text-small text-default-500">
                      Non proident excepteur{" "}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Pariatur cupidatat exercitation fugiat tempor in deserunt
                    sit. Irure sit voluptate esse aute.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter className="justify-end">
                  <p className="text-warning ">02.11.2025</p>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="">
              <Card className="mx-auto max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://nextui.org/avatars/avatar-4.png"
                    width={40}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-md">Tasha Mccormick</p>
                    <p className="text-small text-default-500">
                      Non proident excepteur{" "}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Pariatur cupidatat exercitation fugiat tempor in deserunt
                    sit. Irure sit voluptate esse aute.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter className="justify-end">
                  <p className="text-warning ">02.11.2025</p>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide className="">
              <Card className="mx-auto max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://nextui.org/avatars/avatar-5.png"
                    width={40}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-md">Tasha Mccormick</p>
                    <p className="text-small text-default-500">
                      Non proident excepteur{" "}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Pariatur cupidatat exercitation fugiat tempor in deserunt
                    sit. Irure sit voluptate esse aute.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter className="justify-end">
                  <p className="text-warning ">02.11.2025</p>
                </CardFooter>
              </Card>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Reviews;
