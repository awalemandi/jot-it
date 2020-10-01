// import 'date-fns';
// import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { startOfToday } from 'date-fns';

// const DatePicker = () => {
//   const [selectedDate, setSelectedDate] = React.useState(startOfToday());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <KeyboardDatePicker
//             disableToolbar
//             variant="inline"
//             format="MM/dd/yyyy"
//             margin="normal"
//             id="commenceDate"
//             label="Commence: "
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//                 'aria-label': 'change date',
//             }}
//             />
//         </MuiPickersUtilsProvider>
//     </>
//   );
// }

// export default DatePicker;