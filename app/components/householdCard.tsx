import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HouseHoldCardProps {
  id: string;
  name: string;
  desc?: string;
  icon?: string; //URL of image, if none provided, default icon is used
}

function HouseholdCard(props: HouseHoldCardProps) {
  console.log("desc: ", props.desc, ".");

  return (
    <React.Fragment key={props.id}>
      <div className="card card-side card-compact xl:w-96 w-80 max-w-7xl shadow-xl mb-2 bg-zinc-100 rounded-xl">
        <Image
          src={props.icon || "/houseDefault.jpg"}
          width={80}
          height={100}
          alt="Shoes"
          className="rounded-r-xl object-cover shadow-md"
        />

        <div className="card-body gap-0">
          <h2 className="font-semibold text-lg pb-1 leading-4 break-normal break-words w-48 xl:w-64" id="houseName">
            {props.name}
          </h2>
          <p className = "text-xs break-normal break-words w-48 xl:w-64" id="houseDesc">{props.desc}</p>

          <div className="card-actions justify-end">
            <Link href="household/[houseId]" as={`household/${props.id}`}>
              <a className="btn btn-accent btn-xs ml-5 text-xs mt-2 rounded-lg normal-case shadow-md"> Go to House</a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HouseholdCard;
