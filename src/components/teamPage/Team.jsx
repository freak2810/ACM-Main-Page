import React from "react";

export default function Team(props) {
  console.log(props);

  const RenderTeamList = (teamList) => {
    return teamList.map((teamMember) => {
      return (
        <div key={teamMember.name}>
          <img src={teamMember.avatar} alt="" />
          <h1>{teamMember.name}</h1>
          <h2>{teamMember.designation}</h2>
        </div>
      );
    });
  };

  return <div>{RenderTeamList(props.teamList)}</div>;
}
