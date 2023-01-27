// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

{
  /* <Routes>
<Route path="/" element={<Navigate to={"dashboard"} />} />
</Routes> */
}
/*******   data comes from backend     ********************* */
//  const data1 = [
//     {
//       name: "name",
//       age: "12",
//       lname: "lname",
//       phone: [
//         { type: "test1", value: "0987654321" },
//         { type: "test2", value: "0987654321" },
//         { type: "assi", value: "0987654321" },
//       ],
//     },
//     {
//       name: "name",
//       age: "12",
//       lname: "lname",
//       phone: [
//         { type: "test1", value: "0987654321" },
//         { type: "test2", value: "0987654321" },
//         { type: "assi", value: "0987654321" },
//       ],
//     },
//     {
//       name: "name",
//       age: "12",
//       lname: "lname",
//       phone: [
//         { type: "test1", value: "0987654321" },
//         { type: "test2", value: "0987654321" },
//         { type: "assi", value: "0987654321" },
//       ],
//     },
//     {
//       name: "name",
//       age: "12",
//       lname: "lname",
//       phone: [
//         { type: "test1", value: "0987654321" },
//         { type: "test2", value: "0987654321" },
//         { type: "assi", value: "0987654321" },
//       ],
//     },
//   ];

//   /**************  converted data *********** */
//   const data = data1.map((data) => {
//     const t = data.phone.reduce((data2, val) => {
//       return { ...data2, [val.type]: val };
//     }, {});
//     console.log("tttttttttttttt", t);
//     return { ...data, ...t };
//   });

//   /*************   columens   ******* */
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "age",
//     },
//     {
//       title: "Last name",
//       dataIndex: "lname",
//       key: "lname",
//     },
//   ];

//   /*************   nested columns    */

//   const col = data1[0].phone.map((data) => {
//     return {
//       title: data.type,
//       dataIndex: data.type,
//       key: "name",
//       render: (x, y) => {
//         return <>{x.value}</>;
//       },
//     };
//     // }
//   });

//   /*******   combine the columns */
//   const anotherCol = [...columns, ...col];
