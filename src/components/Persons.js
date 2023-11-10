import React from "react";

function Persons(){
  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];

  const userElement = users.map((user) => {
    return(
      <section>
        <React.Fragment key={user.id}>
            <h2>{user.firstName} {user.lastName}</h2>
            
        </React.Fragment>
      </section>
    )
  });

  return (
    <>
      <h1>Persons of Interest</h1>
      <ol>
          {userElement}
      </ol>
       
      
    </>
  )
}

export default Persons