import { Button, ButtonGroup } from "@nextui-org/react";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex pt-10 flex-col items-center">
        <h5 className="font-dancing text-7xl text-black text-center">
          Our Menu
        </h5>
        <ButtonGroup className="mt-5 light gap-1">
          <Button>Pizza</Button>
          <Button>Burger</Button>
          <Button>Toast</Button>
          <Button>Drink</Button>
        </ButtonGroup>
        <div className="my-14">
          <div className="grid grid-cols-6 gap-2 place-items-center">
            <div className="md:mt-15 lg:mt-15 xl:mt-15 mt-24 lg:col-span-2 md:col-span-3 sm:col-span-3 col-span-6 mx-auto">
              <MenuItem />
            </div>
            <div className="md:mt-15 lg:mt-15 xl:mt-15 mt-24 lg:col-span-2 md:col-span-3 sm:col-span-3 col-span-6 mx-auto">
              <MenuItem />
            </div>
            <div className="md:mt-15 lg:mt-15 xl:mt-15 mt-24 lg:col-span-2 md:col-span-3 sm:col-span-3 col-span-6 mx-auto">
              <MenuItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuWrapper;
