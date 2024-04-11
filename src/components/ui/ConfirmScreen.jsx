import { Button } from "./button";

function ConfirmScreen() {
  return (
    <div className="mx-auto max-w-xl rounded-sm bg-white py-6 px-8 flex flex-col">
      <h2 className="text-xl font-bold mb-3">Confirm your Appointment</h2>
      <div className="w-full h-[1px] bg-slate-200 mb-6"></div>

      <table className="w-full border-spacing-1 border-separate">
        <thead className="text-left text-black font-bold ">
          <tr>
            <th>Fullname</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-left text-slate-500">
          <tr>
            <td>Yusuf Ad</td>
            <td>0 536 643 05 13</td>
            <td></td>
          </tr>
        </tbody>
        <thead className="text-left text-black font-bold">
          <tr>
            <th>Department</th>
            <th>Doctor</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-left text-slate-500">
          <tr>
            <td>Neurology</td>
            <td>Sadık Düşmen</td>
            <td></td>
          </tr>
        </tbody>
        <thead className="text-left text-black font-bold">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-left text-slate-500">
          <tr>
            <td>10.04.24</td>
            <td>12:00</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <Button className="mt-8 self-end py-6 bg-green-600 hover:bg-green-700">
        Confirm Appointment
      </Button>
    </div>
  );
}

export default ConfirmScreen;
