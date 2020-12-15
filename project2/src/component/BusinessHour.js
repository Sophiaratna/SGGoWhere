const show = {
  daily: "Daily",
  public_holiday: "Public Holiday",
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thur",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

const BusinessHour = (props) => {
  console.log("Business hour is called")
  const data = props.data
  const category = props.category

  console.log(data, category)
  const showBizHr = () => {
  console.log("show biz hour is called")
  console.log(data)
  let display = [];
  if (data.length === 0) {
    display = [<p>No data available</p>]
  } else if (data.length <= 2) {
    console.log(data)
    display = data.map((info) => {
      return (
      <>
        <p>
          <strong>{show[info.day]}</strong>
        </p>
        <p>Open: {info.openTime}</p>
        <p>Close: {info.closeTime}</p>
      </>);
    });
  } else {
    const days = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const openTime = data[0].openTime;
    const closeTime = data[0].closeTime;
    let result = [];
    let diff = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].day !== "public_holiday") {
        if (data[i].openTime === openTime && data[i].closeTime === closeTime) {
          result.push(data[i].day.toLowerCase());
        } else diff.push(data[i].day.toLowerCase());
      }
    }
    let tempArr = [result[0]];
    let combinedResult = [];
    let daysIndex = days.indexOf(result[0]) + 1;
    for (let resultIndex = 1; resultIndex < result.length; resultIndex++) {
      if (result[resultIndex] === days[daysIndex]) {
        tempArr.push(result[resultIndex]);
        daysIndex += 1;
      } else {
        combinedResult.push(tempArr);
        tempArr = [result[resultIndex]];
        daysIndex = days.indexOf(result[resultIndex]) + 1;
      }

      if (resultIndex === result.length - 1) {
        combinedResult.push(tempArr);
      }
    }

    display = combinedResult.map((item) => {
      return (
        <>
          <p>{`${show[item[0]]}-${show[item[item.length - 1]]}`}</p>
          <p>
            {openTime}-{closeTime}
          </p>
        </>
      );
    });
  }
  console.log(display)
  return display

}

  return (
    <>
    <h5>Operating Hours:</h5>
    {category === "accommodation" ? <p>Daily</p> : <div>{showBizHr()}</div>}
    </>
  )
}

export default BusinessHour;
