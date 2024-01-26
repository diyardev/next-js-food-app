import Image from "next/image";

const Campaigns = () => {
  return (
    <div className=" container mx-auto py-24 justify-between grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 ">
      <div className="py-5 flex  items-center col-span-3 mx-auto">
        <div>
          <Image alt="d" src="/images/f3.png" width={180} height={180} />
        </div>
        <div className="p-5 text-center">
          <p className="font-dancing text-2xl">Tasty Thursdays</p>
          <p className="font-dancing text-3xl font-extrabold">10% Off</p>
          <button className="bg-primary p-2 font-semibold rounded-md mt-4">
            ORDER NOW
          </button>
        </div>
      </div>

      <div className="py-5 sm:hidden  lg:flex flex  items-center col-span-3 mx-auto">
        <div>
          <Image alt="d" src="/images/f6.png" width={180} height={180} />
        </div>
        <div className="p-5 text-center">
          <p className="font-dancing text-2xl">Pizza Days</p>
          <p className="font-dancing text-3xl font-extrabold">20% Off</p>
          <button className="bg-primary p-2 font-semibold rounded-md mt-4">
            ORDER NOW
          </button>
        </div>
      </div>

      <div className="py-5   flex  items-center col-span-3 mx-auto">
        <div>
          <Image alt="d" src="/images/f9.png" width={180} height={180} />
        </div>
        <div className="p-5 text-center">
          <p className="font-dancing text-2xl">Davukk</p>
          <p className="font-dancing text-3xl font-extrabold">35% Off</p>
          <button className="bg-primary p-2 font-semibold rounded-md mt-4">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
