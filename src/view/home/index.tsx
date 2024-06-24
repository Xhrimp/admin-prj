
import MyCourse from "./mycourse/MyCourse"
import PublicKma from "./publicKma/PublicKma"
import Calendar from "./schedule/Calendar"
import Calendar1 from "./testcalendar/TestCalendar"

const Hometab = () => {
  return <div style={{ marginTop: "20px" }}>
    <Calendar1 />
    <PublicKma />
    <MyCourse />
  </div>
}

export default Hometab
