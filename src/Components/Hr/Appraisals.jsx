import React, { useState } from "react";
import { Checkbox } from "../CheckBox";
import { SecondaryButton, TransparentButton, PrimaryButton } from "../Button";
import { Button } from "../Button/Button";
import { StudentsData } from "../../Models/StudentsData";
import { Table } from "../Table";
import { InputField } from "../../Components/InputField";

const getData = () => {
  return [...StudentsData];
};

const Appraisals = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: "Highest Rated Employees", checked: false },
    { id: 2, text: "Lowest Rated Employees", checked: false },
    { id: 3, text: "Highest Appraisals Ratings", checked: false },
    { id: 4, text: "Highest Feedback Given", checked: false },
  ]);

  const handleChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) => {
        if (checkbox.id === id) {
          checkbox.checked = !checkbox.checked;
        }
        return checkbox;
      })
    );
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Employees",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Joiningdate",
        accessor: "joiningDate",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Action",
        Cell: (
          <Button>
            <button
              // className="mr-1.5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="button"
              data-te-offcanvas-toggle
              data-te-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              View
            </button>

            <div
              className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              data-te-offcanvas-init
            >
              <div className="flex items-center justify-between p-4">
                <h1
                  className="mb-0 font-semibold leading-normal"
                  id="offcanvasRightLabel"
                >
                  Feedback Statistics
                  <p>Below are details for appraisal.</p>
                  <br />
                  <hr />
                </h1>

                <button
                  type="button"
                  className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-offcanvas-dismiss
                >
                  <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="offcanvas-body flex-grow overflow-y-auto p-4">
                <h2>Total Feedback</h2>
                <p>24 Till Now</p>

                <br />
                <h2>8 - Average Rating</h2>
                <p>lowest 4</p>
                <br />

                <h2>6 - Worked with him</h2>
                <p>highest rated 10</p>
                <br />

                <h2>13 - Wants him to get appraisal</h2>
                <p>out of 6 worked with him</p>
                <br />
                <hr />
                <br />

                <h2>Feedback Messages</h2>
                <br />
                <p>Good with MERN Stack +8</p>
                <p>Need to improve DevOps +4</p>
                <br />

                <SecondaryButton>View All</SecondaryButton>

                <br />
                <br />

                <h2>Share This Report!</h2>
                <TransparentButton>Share</TransparentButton>
              </div>
            </div>
          </Button>
        ),
      },

      {
        Header: "Feedback",
        Cell: (
          <TransparentButton>
            <button
              // className="mr-1.5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="button"
              data-te-offcanvas-toggle
              data-te-target="#offcanvasRightGive"
              aria-controls="offcanvasRight"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Give
            </button>

            <div
              className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
              tabindex="-1"
              id="offcanvasRightGive"
              aria-labelledby="offcanvasRightLabel"
              data-te-offcanvas-init
            >
              <div className="flex items-center justify-between p-4">
                <h1
                  className="mb-0 font-semibold leading-normal"
                  id="offcanvasRightLabel"
                >
                  Please Give Feedback
                  <p>Enter the details below.</p>
                  <br />
                  <hr />
                </h1>

                <button
                  type="button"
                  className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-offcanvas-dismiss
                >
                  <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="offcanvas-body flex-grow overflow-y-auto p-4">
                <InputField
                  label="Rate him/her out of 10"
                  placeholder="Rating"
                />
                <br />
                <InputField
                  type="textarea"
                  label="Feedback Message"
                  placeholder="Feedback"
                />
                <br />

                <h2>
                  Worked with him/her?
                  <p>
                    <Button>Yes</Button>
                    <Button>No</Button>
                  </p>
                </h2>
                <br />

                <h2>Should Get Appraisals?</h2>
                <p>
                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    checked
                    id="bordered-radio-2"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-2"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No
                  </label>
                </div>
                </p>
                <br />
                <hr />
                <br />

                <TransparentButton>Submit Feedback</TransparentButton>
              </div>
            </div>
          </TransparentButton>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <div className="m-10">
        {/* Filters */}
        <h1 className="text-2xl font-bold">Filters</h1>
        <hr className="my-2" />
        <h2>Sort By</h2>
        <div className="flex flex-wrap justify-between">
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="w-1/4 p-2">
              <label className="block text-gray-700 font-medium">
                <input type="checkbox" className="mr-2" />
                {checkbox.text}
              </label>
            </div>
          ))}
        </div>

        {/* Employee Table */}
        <h1 className="text-2xl font-bold my-4">Employee Table</h1>
        <hr className="my-2" />
        <div className="flex gap-2 flex-col">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Appraisals;
