import React, { useEffect, useState } from "react";

const SheetReport = () => {
    const [dates, setDates] = useState([]);

     useEffect(() => {
       const today = new Date();
       const firstDayOfMonth = new Date(
         today.getFullYear(),
         today.getMonth(),
         1
       );
       const lastDayOfMonth = new Date(
         today.getFullYear(),
         today.getMonth() + 1,
         0
       );

       const newDates = [];
       let currentDate = new Date(firstDayOfMonth);

       while (currentDate <= lastDayOfMonth) {
         const formattedDate = currentDate.toLocaleDateString("en-US", {
           year: "numeric",
           month: "2-digit",
           day: "2-digit",
         });
         newDates.push(formattedDate);

         // Move to the next day
         currentDate.setDate(currentDate.getDate() + 1);
       }

       setDates(newDates);
     }, []);
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card mt-4">
                <div className="card-header bg-info">
                  Attendance Sheet Report
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="example2"
                      className="table table-bordered table-striped"
                    >
                      <thead className="thead-dark">
                        <tr>
                          <th>MemberID</th>
                          <th>Name</th>
                          {/* <th>ID</th> */}
                          {/* Log on to codeastro.com for more projects! */}
                          {dates.map((date) => (
                            <th key={date} style={{}}>
                              {date}
                            </th>
                          ))}
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SheetReport;
