import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg - bg-slate-400 text-white text-4xl p-10">
      User: {userid}
    </div>
  );
}

export default User;
