import PropTypes from "prop-types";

const Sidebar = ({ wantToCook, handlePreparingButton, currentlyCooking }) => {
  // Calculate TotalTime.
  const totalTime = currentlyCooking.reduce(
    (pre, curr) => pre + parseInt(curr.preparing_time.split(" ")[0]),
    0
  );

  // Calculate Total Calories.
  const totalCalories = currentlyCooking.reduce(
    (pre, curr) => pre + parseInt(curr.calories.split(" ")[0]),
    0
  );

  return (
    <div className="lg:w-2/6 border border-[#D4D4D4] rounded-2xl p-3 md:p-5 lg:p-6 text-center">
      <div className="want_to_cook mb-10">
        <h2 className="border-b-2 inline-block text-2xl font-semibold pb-3">
          Want to cook: <span>{wantToCook.length}</span>
        </h2>
        <div className="overflow-x-auto pt-3">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {wantToCook.map((item, index) => (
                <tr key={index} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                  <td>
                    <button
                      onClick={() => handlePreparingButton(item.id)}
                      className="btn rounded-full btn-accent btn-xs"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="currently_cooking">
        <h2 className="border-b-2 inline-block text-2xl font-semibold pb-3">
          Currently cooking: <span>{currentlyCooking.length}</span>
        </h2>
        <div className="overflow-x-auto pt-3">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentlyCooking.map((item, index) => (
                <tr key={index} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.preparing_time}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <h3>
          Total Time = <span>{totalTime} Minutes</span>
        </h3>
        <h3>
          Total Calories = <span>{totalCalories} Calories</span>
        </h3>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  wantToCook: PropTypes.array.isRequired,
  handlePreparingButton: PropTypes.func.isRequired,
  currentlyCooking: PropTypes.array.isRequired,
};

export default Sidebar;
