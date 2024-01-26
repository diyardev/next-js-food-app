import { Image } from "@nextui-org/react";
import React from "react";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-10">
      <div className="relative flex flex-1 justify-center">
        <Image src="/images/f6.png" width="500px" />
      </div>
      <div className="w-[50vh]">
        <p className="font-dancing text-6xl">Good Pizza</p>
        <span>10$</span>
        <p>
          eniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque Veniam debitis quaerat
          officiis quasi cupiditate quo, quisquam velit, magnam voluptatem
          repellendus sed eaqu
        </p>
        <div>
          <h4>Choose the size</h4>
        </div>
      </div>
    </div>
  );
};

export default Index;
