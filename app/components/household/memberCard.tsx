import React from "react";

import Image from "next/image";

import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/clientApp";
import { doc } from "firebase/firestore";
import icon from '../../public/defaultProfile.png'


interface Props {
  userId: string;
  isOwner: boolean;
}

export default function MemberCard(props: Props) {
  const [userData, loading, error] = useDocumentData(
    doc(db, "users", props.userId)
  );

  return (
    <div className="card card-side card-compact xl:w-96 w-80 bg-zinc-100 shadow-xl mb-2 rounded-xl break-normal">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span className="btn btn-ghost loading"></span>}
      {userData && (
        <>
          <div className="avatar">
            <div className="w-20 mask mask-squircle">
              <Image
                src={userData.data.photoURL || icon}
                alt={userData.data.displayName ?? ""}
                layout="fill"
                width={80}
                height={100}
                className="rounded-r-xl object-cover shadow-md"
              />
            </div>
          </div>
          <div className="card-body gap-0">
            <h2 className="font-semibold text-lg pb-1 leading-4 break-normal break-words w-48 xl:w-64">
              {userData.data.displayName || userData.data.email}
            </h2>
            <p className="text-xs">{props.isOwner ? "Owner" : "Member"}</p>
          </div>
        </>
      )}
    </div>
  );
}
