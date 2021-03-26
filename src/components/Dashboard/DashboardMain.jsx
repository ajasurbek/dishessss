import DashboardLeftSide from './DashboardLeft'
import DashboardRightSide from './DashboardRight'
import './DashboardMain.scss'

const DashboardMain = () => {
    return (
        <>
        <div className="main__wrapper">
            <DashboardLeftSide />
            <DashboardRightSide />
        </div>
        </>
    )
}
export default DashboardMain