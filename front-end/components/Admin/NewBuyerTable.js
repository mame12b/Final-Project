import { useState } from "react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewBuyerTable = ({ shareholders }) => {
let i=1;
  const [searchTerm, setSearchTerm] = useState("");
  const [displayColumns, setDisplayColumns] = useState(25); // default to display all columns //5
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of items to display per page
  // filter shareholders based on search term
  const filteredShareholders = shareholders.filter((shareholder) =>
    shareholder.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // calculate total number of pages
  const totalPages = Math.ceil(filteredShareholders.length / itemsPerPage);

  // calculate index of first and last items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // slice the array of filtered shareholders to display only the current page's items
  const currentShareholders = filteredShareholders.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // reset to first page when search term changes
  };

  // handle column display option change
  const handleDisplayColumnsChange = (event) => {
    setDisplayColumns(parseInt(event.target.value));
  };

  // handle previous page button click

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  // handle next page button click
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };


  return (
    <>
      <div className="">
        {/* <div className="w-full h-10 border-b-gray-300 border border-teal-50 mb-2 -mt-5 text-white flex"> */}
         {/* <div className="flex mb-3 gap-8">
         <button className="w-20  h-8 border bg-blue-500 ">
            <FaPlus className="ml-1 mr-1 -mb-5 " />
            <Link href="/admin1/shareholder_registration">New</Link>
          </button>
          <div className="">
          <button className="w-36  h-8 border bg-red-500 mb-4  ">
            <FaPlus className="ml-3 mr-1 -mb-5  " />
            <Link href="/admin1/dividend">dividend</Link>
          </button>
          </div>
         </div> */}
        {/* </div> */}
        <div className="flex ">
          <div className="flex items-center mb-4 ml-40">
            <div className=" ml-80 ">
              <label htmlFor="search" className="mr-2 font-bold sm:ml-40">
                Search:
              </label>
            </div>
            <input
              type="text"
              id="search"
              className="border border-gray-400 rounded px-2 py-1"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <table className="w-full text-center ">
          <thead>
            <tr>
              <th className={`py-1 px-2 ${displayColumns < 8 ? "hidden" : ""}`}>
                Shareholder ID
              </th>
              <th className={`py-1 px-2 ${displayColumns < 7 ? "hidden" : ""}`}>
                First Name
              </th>
              <th className={`py-1 px-2 ${displayColumns < 6 ? "hidden" : ""}`}>
                Middle Name
              </th>
              <th className={`py-1 px-2 ${displayColumns < 4 ? "hidden" : ""}`}>
                Email
              </th>
              <th
                className={`py-1  px-2 ${displayColumns < 4 ? "hidden" : ""}`}
              >
                shareamount
              </th>
              <th
                className={`py-1 px-2 text-center${
                  displayColumns < 2 ? "hidden" : ""
                }`}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentShareholders.map((shareholder,index) => (
              <tr key={shareholder._id}>
                <td
                  className={`border py-1 px-2 ${
                    displayColumns < 8 ? "hidden" : ""
                  }`}
                >
                  {`${((index + 1)+((currentPage-1)*5))} `}
                </td>
                <td
                  className={`border py-1 px-2${
                    displayColumns < 7 ? "hidden" : ""
                  }`}
                >
                  {shareholder.firstname}
                </td>
                <td
                  className={`border py-1 px-2 ${
                    displayColumns < 6 ? "hidden" : ""
                  }`}
                >
                  {shareholder.middlename}
                </td>
                <td
                  className={`border py-1 px-2 ${
                    displayColumns < 4 ? "hidden" : ""
                  }`}
                >
                  {shareholder.email}
                </td>
                <td
                  className={`border py-1 px-2 ${
                    displayColumns < 4 ? "hidden" : ""
                  }`}
                >
                  {shareholder.shareamount}
                </td>
                <td
                  className={`py-1 px-2 text-center  flex${
                    displayColumns < 2 ? "hidden" : ""
                  }`}
                >
                  <button>
                    <Link
                      className="flex text-center ml-2 bg-green-700"
                      href={`/admin1/shareholder_registration?id=${shareholder._id}`}
                    >
                      <FaEdit className="mt-1 mr-2 ml-1" />
                      Approve
                    </Link>{" "}
                  </button>
                  
                  <button>
                    <Link
                      className="flex text-center ml-2 bg-gray-600 text-white"
                      href={`/admin1/TransactionHistory?email=${shareholder.email}`}
                    >
                      <FaEdit className="mt-1 mr-2 ml-1" />
                      Transaction
                    </Link>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <div>
            <label htmlFor="displayColumns" className="mr-2 font-bold">
              Display:
            </label>
            <select
              id="displayColumns"
              className="border border-gray-400 rounded px-2 py-1"
              value={displayColumns}
              onChange={handleDisplayColumnsChange}
            >
              <option value="7">All</option>
              <option value="6">6 Columns</option>
              <option value="5">5 Columns</option>
              <option value="4">4 Columns</option>
              <option value="3">3 Columns</option>
              <option value="2">2 Columns</option>
              <option value="1">1 Columns</option>
             
              
            </select>
          </div>
          <div>
            <button
              className={`px-2 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={`ml-2 px-2 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewBuyerTable