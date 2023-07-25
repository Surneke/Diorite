import json from "@/utils/index.json";
import Link from "next/link";

const shop = () => {
  return (
    <div className="p-[140px_60px_120px] font-thin">
      <div className="flex justify-between text-[16px] text-title pb-[32px]">
        <h3>All Categories</h3>
        <div className="flex gap-x-[5px]">
          <h3>Sort</h3>
          <img src="/static/arrow-down.svg" alt="" />
        </div>
      </div>
      <div className="grid gap-x-[24px] gap-y-[45px] grid-cols-3">
        {json?.map((el, i) => {
          if (i < 3) {
          }
          return (
            <Link href={`/products/${el.id}`} key={i}>
              <div className="h-[635px] w-[584px] mt-4">
                <img
                  className="rounded-xl h-full object-cover"
                  src={el.src}
                  alt="image"
                />
              </div>
              <h2 className="text-[24px] leading-[42px] text-title pt-[16px]">
                {el.name}
              </h2>
              <h3 className="text-[16px] leading-[18px] text-description">
                {el.price}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default shop;
