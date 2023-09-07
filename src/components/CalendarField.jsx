import getCalendarArr from "./getcalendararr";

export default function CalendarField({ now }) {
  const calendarArr = getCalendarArr(now);
  console.log(calendarArr);
  return (
    <tbody>
      {calendarArr.map((el, idx) => (
        <tr key={idx}>
          {el.map((item, id) => (
            <td key={id} className={item.prop ? item.prop : ""}>
              {item.date}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
