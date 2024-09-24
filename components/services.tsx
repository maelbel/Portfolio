import { useMonitor } from '../context/UptimeRobotContext';

const UptimeRobotButton = () => {
    const data = useMonitor();

    if (data && data.monitors){
        const totalMonitors = data.monitors.pagination.total;
        const monitorsUp = data.monitors.monitors.filter(monitor => monitor.status === 2);

        let colorPing = '';
        let colorAbsolutePing = '';

        if(monitorsUp.length > 0) {
            if(monitorsUp.length == totalMonitors) {
                colorPing = "bg-green-500";
                colorAbsolutePing = "bg-green-300 animate-ping";
            } else {
                colorPing = "bg-orange-500";
                colorAbsolutePing = "bg-orange-300 animate-ping";
            }
        } else {
            colorPing = "bg-red-500";
            colorAbsolutePing = "bg-red-300";
        }

        return ( 
            <a href="https://stats.uptimerobot.com/3Ao7tMWcUq" target="_blank" rel="noopener noreferrer" className='flex gap-2 justify-center sm:justify-end items-center'>
                <span className="relative flex h-3 w-3">
                    <span className={`absolute inline-flex h-full w-full rounded-full ${colorAbsolutePing}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${colorPing}`}></span>
                </span>
                Services Opérationnels ({monitorsUp.length}/{totalMonitors})
            </a>)
    } else {
        return <p>Chargement des données...</p>;
    }

};

export default UptimeRobotButton;